import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Image,
  Button,
} from "@chakra-ui/react"
import {CloseIcon, ArrowLeftIcon, ArrowRightIcon} from '@chakra-ui/icons';
import { FC } from 'react';

import styled from 'styled-components';

const BoardWrapper = styled.div`
  width: 100%;
`;

const ThumnailDelete = styled(CloseIcon)`
  display: none;
  position: absolute;
  right: -5px;
  top: -5px;
  background: #ce0000;
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 50%;

`;

const ImageBox = styled.div`
  position: relative;
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 5px;
  vertical-align: middle;
  cursor: pointer;

  &:hover ${ThumnailDelete} {
    display: block;
  }
`;

const Thumbnail = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;

`;

const PaginationWrapepr = styled.div`
  text-align: center;
`;

const createPaginationIndex = (currentPage: number, total: number, limit = 10, listLength = 10) => {
  const totalPages = Math.ceil(total / limit);
  const startSetIndex = Math.floor((currentPage - 1) / listLength);
  const startList = listLength * startSetIndex + 1;

  const length = startList + listLength - 1 > totalPages ? 
    listLength - (startList + listLength - 1 - totalPages) : 
    listLength;
  
  return {
    isFirst: currentPage <= limit,
    isLast: startList + listLength - 1 > totalPages,
    items: Array.from({length}, (_, i) => {  
      return startList + i;
    }),
    first: 1,
    last: totalPages,
    prevFirst: startList - listLength,
    nextFirst: startList + listLength,
  }
};


const Board: FC<{
  data?: any
  page: number;
  limit: number;
  onUpdate: (reportNo: string) => void;
  onDelete: (reportNo: string, nid: string) => void;
  onGoto: (page: number) => void;
}> = ({data, page, limit, onUpdate, onDelete, onGoto}) => {
  if (!data) data = {type: 'list', total: 0, data: []};
  const {type, total, data: items} = data;
  const {isFirst, isLast, items: pagenation, prevFirst, nextFirst, first, last} = createPaginationIndex(page, total, limit);

  const clickHandler = ({target}: any) => {
    window.open(target.src, '_blank');
  };

  return <BoardWrapper>
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th style={{width: 150}}>신고번호</Th>
          <Th style={{width: 120}}>국내/수입</Th>
          <Th style={{width: 250}}>건강기능식품 이름</Th>
          <Th style={{width: 250}}>제조사</Th>
          <Th>썸네일</Th>
        </Tr>
      </Thead>
      <Tbody>{
        items.map(({type,name, company, report_no, thumbnails}: any, i: number) => <Tr key={report_no + '-' + i}>
          <Td>{report_no}</Td>
          <Td>{type === 'domestic' ? '국내' : '수입'}</Td>
          <Td title={name}>{name}</Td>
          <Td title={company}>{company}</Td>
          <Td>
            <Button style={{verticalAlign: 'middle'}} colorScheme="teal" size="sm" onClick={() => onUpdate(report_no)}>
              +
            </Button>
            {thumbnails.map((name: string) => 
            <ImageBox key={name}>

              <Thumbnail 
                borderRadius="10px"
                boxSize="100px"
                src={`https://health-functional-food.s3.ap-northeast-2.amazonaws.com/saved/${report_no}/${name}`}
                onClick={clickHandler}
                />
              <ThumnailDelete color="white" onClick={() => onDelete(report_no, name)}/>
            </ImageBox>
            )}
          </Td>
        </Tr>)}
      </Tbody>
    </Table>
    <PaginationWrapepr>
      <Button disabled={isFirst} onClick={() => onGoto(first)}><ArrowLeftIcon /></Button>
      <Button disabled={isFirst} onClick={() => onGoto(prevFirst)}>{'<'}</Button>
      {pagenation.map(n => {
        return <Button key={`pagination-${n}`} 
        colorScheme={n === page ? 'teal' : 'gray'}
        style={{margin: 5, width: 70}}
        onClick={() => n !== page && onGoto(n)}
        >{n}</Button>
      })}
      <Button disabled={isLast} onClick={() => onGoto(nextFirst)}>{'>'}</Button>
      <Button disabled={isLast} onClick={() => onGoto(last)}><ArrowRightIcon /></Button>
    </PaginationWrapepr>
  </BoardWrapper>
}

export default Board;