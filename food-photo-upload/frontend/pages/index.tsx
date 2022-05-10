import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ky from 'ky';
import { useRouter } from 'next/router'
import useSWR, { useSWRConfig } from 'swr'

import Board from '../components/Board';
import { useEffect, useRef, useState } from 'react';
import Loading from '../components/Loading';
import { Input, Radio, RadioGroup, Select, Stack, HStack, } from "@chakra-ui/react"
import { Text } from "@chakra-ui/layout"
import styled from 'styled-components';
import { Button } from '@chakra-ui/button';
import { Spinner } from '@chakra-ui/spinner';

let isDragUploading = false;

const fileSystemEntryParse = async (data: FileSystemEntry|DataTransferItemList) => {
  const entries = data instanceof DataTransferItemList ? [...data].map(dataTransferItem => dataTransferItem.webkitGetAsEntry()) : [data];
  const stack = [...entries];
  let target: FileSystemEntry;

  const result: File[] = [];

  while (target = stack.shift() as FileSystemEntry) {
    if (target.isDirectory) {
      const reader = (target as FileSystemDirectoryEntry).createReader();
      
      const entries = await new Promise<FileSystemEntry[]>(res => {
        reader.readEntries(entries => res(entries));
      });
      stack.unshift(...entries);
    
    } else {
      const file = await new Promise<File>(res => {
        (target as FileSystemFileEntry).file(file => res(file));
      });
      result.push(file);
    }
  }

  return result;
};

const debounce = <F extends (...args: any) => void>(f: F, ms: number) => {
  let timer: any;

  return (...args: Parameters<F>) => {
    clearTimeout(timer);
    setTimeout(() => f(...args as any), ms);
  };
};

const Nowrap = styled.div`
  white-space: nowrap;
`;

const HOST = process.env.NEXT_PUBLIC_HOST;

const Home: NextPage = () => {
  const router = useRouter();
  const {mutate} = useSWRConfig();

  let { page, limit, query, type, thumb } = router.query as {[key: string]: string};
  page = page??'1';
  limit = limit??'10';
  query = query??'';
  type = type??'integration';
  thumb = thumb??'all';

  const [foodReportNo, setFoodReportNo] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [loadMessage, setLoadMessage] = useState('');

  const changeHandler = async ({target}: any) => {
    if (!target.files.length) return;

    const fd = new FormData();
    [...target.files].forEach(file => fd.append('thumnails', file, file.name));

    setLoading(true);
    
    try {
      await ky.post(`/api/food-thumbnail/${foodReportNo}`, {body: fd});
      router.reload();
    } catch (err: any) {
      console.log(err.message);
      if (err.message === 'Request failed with status code 403 Forbidden') {
        alert('이미지 파일만 업로드할 수 있습니다.')
        setLoading(false);
      }
    }


  };

  const updateHandler = async (reportNo: string) => {
    if (!fileInputRef.current) return;
    const fileInput = fileInputRef.current;
    
    setFoodReportNo(reportNo);

    fileInput.click();
  };

  const deleteHandler = async (reportNo: string, nid: string) => {
    const r = confirm('사진을 삭제하시겠습니까?');
    if (!r) return;

    setLoading(true);
    try {
      await ky.delete(`/api/food-thumbnail/${reportNo}/${nid}`);
    } catch (err: any) {
      alert('삭제에 실패했습니다. 다시 시도해주세요.')
      setLoading(false);
    }
    router.reload();
  };

  const gotoHandler = (page: number) => {
    router.push(`/?page=${page}&limit=${limit}&type=${type}&query=${query}&thumb=${thumb}`);
  };

  const changeTypeHandler = (value: string) => {
    router.push(`/?page=${1}&limit=${limit}&type=${value}&query=${query}&thumb=${thumb}`);
  };
  const changeLimitHandler = ({target}: any) => {
    router.push(`/?page=${1}&limit=${target.value}&type=${type}&query=${query}&thumb=${thumb}`);
  };

  const changeThumbHandler = (value: string) => {
    router.push(`/?page=${1}&limit=${limit}&type=${type}&query=${query}&thumb=${value}`);
  };

  const queryFunction = debounce(({target}: any) => {
    if (target.value === query) return;
    router.push(`/?page=${1}&limit=${limit}&type=${type}&query=${target.value}&thumb=${thumb}`);
  }, 750);

  const changeQueryHandler = queryFunction;
  const enterHandler = (ev: any) => {
    if (ev.key === 'Enter') router.push(`/?page=${1}&limit=${limit}&type=${type}&query=${ev.target.value}&thumb=${thumb}`);
  };


  useEffect(() => {
    document.body.ondragover = ev => ev.preventDefault();
    document.body.ondrop = async (ev) => {
      ev.preventDefault();
      if (isDragUploading) return;
      isDragUploading = true;

      console.log(ev.dataTransfer?.files);
      const files = await fileSystemEntryParse(ev.dataTransfer?.items as DataTransferItemList);
      const uploadFiles = files.map(file => {
        return {
          file,
          reportNo: file.name.split(/\.[^.]+?$/)[0],
        };
      });

      const total = uploadFiles.length;
      let i = 0;
      for (const {reportNo, file} of uploadFiles) {
        setLoading(true);
        setLoadMessage(`${++i}/${total} - ${reportNo} uploading...`);
        const fd = new FormData();
        fd.append('thumnails', file, file.name);
    
        
        try {
          await ky.post(`/api/food-thumbnail/${reportNo}`, {body: fd});
        } catch (err: any) {
          if (err.message === 'Request failed with status code 403 Forbidden') {
            continue;
          }
          alert(err.message);
          setLoading(false);
        }
      }

      router.reload();

    }
  });

  const logoutHandler = async () => {
    const result = await ky.put(`/api/users/logout`);
    
    mutate('/api/users');
    router.push('/login');
  };


  const {data, error} = useSWR(`/api/food-thumbnail?page=${page}&limit=${limit}&query=${query}&type=${type}&thumb=${thumb}`);

  const {data: userData, error: userError} = useSWR(`/api/users`);

  useEffect(() => {
    if (!userError) return;
    router.push('/login');
  }, [userError]);

  return data && !error ? <div className={styles.container}>
      <div id="modal"></div>
      <input style={{display: 'none'}} type="file" ref={fileInputRef} multiple onChange={changeHandler}/>
      <Head>
        <title>Food uploader</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Loading show={loading} msg={loadMessage} />
    <Button colorScheme="teal" onClick={logoutHandler}>로그아웃</Button>
      <p>Total: {data?.total ?? ''}</p>
      <Text fontSize="xl">국내/수입 여부</Text>
      <RadioGroup value={type} onChange={changeTypeHandler} flex={1}>
        <HStack>
          <Radio value="integration"><Nowrap>통합</Nowrap></Radio>
          <Radio value="domestic"><Nowrap>국내</Nowrap></Radio>
          <Radio value="foreign"><Nowrap>수입</Nowrap></Radio>
        </HStack>
      </RadioGroup>
      <Text fontSize="xl">사진업로드 여부</Text>
      <RadioGroup value={thumb} onChange={changeThumbHandler} flex={1}>
        <HStack>
          <Radio value="all"><Nowrap>모두</Nowrap></Radio>
          <Radio value="exist"><Nowrap>있음</Nowrap></Radio>
          <Radio value="nothing"><Nowrap>없음</Nowrap></Radio>
        </HStack>
      </RadioGroup>
      <Input placeholder="건강기능식품 검색정보(신고번호/이름/제조사)를 입력하세요." defaultValue={query} onInput={changeQueryHandler} onKeyPress={enterHandler} />
      <Select placeholder="개수 선택" value={limit} onChange={changeLimitHandler}>
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="500">500</option>
      </Select>
      <Board 
        data={data} 
        page={Number(page ?? '1')} 
        limit={Number(limit ?? '10')} 
        onUpdate={updateHandler} 
        onDelete={deleteHandler} 
        onGoto={gotoHandler} />
    </div>
    : <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />;
}

export default Home
