import ContentSection from '@/components/ContentSection';
import { Spacer } from '@/components/Flex';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Radio from '@/components/Radio';
import SectionTitle from '@/components/SectionTitle';
import { Column, Row } from '@/layouts/flex-utils';
import type { NextPage } from 'next';
import Image from 'next/image';
import Content from '@/components/calculator/bmi/Content';
import { useRef, useState } from 'react';
import { computeBMI } from '@/helper/bmi-list';
import classNames from 'classnames';

const BMI: NextPage = () => {
  const [options, setOptions] = useState({
    gender: '' as '' | 'M' | 'F',
    invalidGender: false,
    height: 0,
    invalidHeight: false,
    weight: 0,
    invalidWeight: false,
    age: 0,
    invalidAge: false,
    bmi: 0,
    complete: false,
  });

  const i1 = useRef<HTMLInputElement>(null);
  const i2 = useRef<HTMLInputElement>(null);
  const i3 = useRef<HTMLInputElement>(null);

  const heightChangeHandler = (ev: any) => {
    const n = Number(ev.target.value);
    if (!Number.isNaN(n)) {
      setOptions((data) => ({ ...data, height: n }));
      // if (n) ev.target.value = n;
    } else {
      if (ev.target.value)
        ev.target.value = ev.target.value
          .split('.')
          .splice(0, 2)
          .join('.')
          .replace(/[^0-9.]/g, '');
    }
  };
  const weightChangeHandler = (ev: any) => {
    const n = Number(ev.target.value);
    if (!Number.isNaN(n)) {
      setOptions((data) => ({ ...data, weight: n }));
      // if (n) ev.target.value = n;
    } else {
      if (ev.target.value)
        ev.target.value = ev.target.value
          .split('.')
          .splice(0, 2)
          .join('.')
          .replace(/[^0-9.]/g, '');
    }
  };
  const ageChangeHandler = (ev: any) => {
    const n = Number(ev.target.value);
    if (!Number.isNaN(n)) {
      setOptions((data) => ({ ...data, age: n }));
      // if (n) ev.target.value = n;
    } else {
      if (ev.target.value)
        ev.target.value = ev.target.value
          .split('.')
          .splice(0, 2)
          .join('.')
          .replace(/[^0-9.]/g, '');
    }
  };

  const computeHandler = () => {
    if (!(options.height && options.weight && options.age && options.gender)) {
      setOptions((data) => ({
        ...data,
        invalidHeight: !options.height,
        invalidWeight: !options.weight,
        invalidAge: !options.age,
        invalidGender: !options.gender,
      }));
      return;
    }

    const bmi = options.weight / (options.height * options.height * 0.0001);
    setOptions((data) => ({ ...data, bmi, complete: true }));
  };
  const resetHandler = () => {
    (i1 as any).current.value = '';
    (i2 as any).current.value = '';
    (i3 as any).current.value = '';

    setOptions({
      gender: '' as '' | 'M' | 'F',
      invalidGender: false,
      height: 0,
      invalidHeight: false,
      weight: 0,
      invalidWeight: false,
      age: 0,
      invalidAge: false,
      bmi: 0,
      complete: false,
    });
  };

  const result = computeBMI(options.bmi);

  return (
    <>
      <Nav breadcrumb />
      <ContentSection className={`font-notosans`}>
        <Spacer size={64} mobileSize={0} />
        <SectionTitle className="desktop" label="BMI ?????????" emphasis />
      </ContentSection>
      <ContentSection className={`font-notosans`}>
        <Content>
          <Row className="control" justifyContent="center" marginTop="45px">
            <div className="form">
              <h4>????????????</h4>
              <Row
                className={classNames('radios', {
                  invalid: options.invalidGender,
                })}
              >
                <Radio
                  name="gender"
                  label="??????"
                  onClick={() =>
                    setOptions((data) => ({ ...data, gender: 'M' }))
                  }
                  defaultChecked={options.gender === 'M'}
                />
                <Radio
                  name="gender"
                  label="??????"
                  onClick={() =>
                    setOptions((data) => ({ ...data, gender: 'F' }))
                  }
                  defaultChecked={options.gender === 'F'}
                />
              </Row>
              <h4>????????????</h4>
              <Column>
                <label>
                  <input
                    ref={i1}
                    className={classNames({ invalid: options.invalidHeight })}
                    onInput={heightChangeHandler}
                    placeholder="?????? ???????????????."
                  />
                  <span>cm</span>
                </label>
                <label>
                  <input
                    ref={i2}
                    className={classNames({ invalid: options.invalidWeight })}
                    onInput={weightChangeHandler}
                    placeholder="???????????? ???????????????."
                  />
                  <span>kg</span>
                </label>
                <label>
                  <input
                    ref={i3}
                    className={classNames({ invalid: options.invalidAge })}
                    onInput={ageChangeHandler}
                    placeholder="????????? ???????????????."
                  />
                  <span>???</span>
                </label>
              </Column>
              <button onClick={computeHandler}>????????????</button>
            </div>
            <div className="result">
              <h4>???????????????</h4>
              <Column
                className={
                  'content ' +
                  (options.bmi ? computeBMI(options.bmi).className : '')
                }
                alignItems="center"
              >
                <p className="p1">
                  ?????? ?????????????????? <span>{options.bmi.toFixed(2)}</span>
                </p>
                <p
                  className="p2"
                  style={{
                    backgroundImage: !options.complete
                      ? `url(/assets/HSIN_Icon_bmi_40x40-04.svg)`
                      : result.className === 'bmi-1'
                      ? `url(/assets/HSIN_Icon_bmi_40x40-01.svg)`
                      : result.className === 'bmi-2'
                      ? `url(/assets/HSIN_Icon_bmi_40x40-02.svg)`
                      : result.className === 'bmi-3'
                      ? `url(/assets/HSIN_Icon_bmi_40x40-03.svg)`
                      : result.className === 'bmi-4'
                      ? `url(/assets/HSIN_Icon_bmi_40x40-03.svg)`
                      : result.className === 'bmi-5'
                      ? `url(/assets/HSIN_Icon_bmi_40x40-03.svg)`
                      : '',
                  }}
                >
                  <span>
                    {options.bmi && options.complete
                      ? result?.label
                      : '????????????'}
                  </span>
                  ?????????.
                </p>
                <button onClick={resetHandler}>?????????</button>
              </Column>
            </div>
          </Row>
          <div className="info">
            <p className="p1">
              ??? 19??? ????????? ????????? ?????????????????? ?????? ???????????? ?????? ??????
              ?????????????????? ????????? ?????????.
            </p>
            <p className="p2">????????????????? ?????? BMI??? ???????????????.</p>
          </div>
          <div className="info-table">
            <h1>
              ??????????????????: ???????????????(??????:2~18???) (kg/m<sup>2</sup>)
            </h1>
            <div className="desktop">
              <Image
                alt="??????????????????: ???????????????(??????:2~18???) (kg/m2)"
                src="/assets/image_calculator_bmi1.svg"
                width="1200"
                height="787"
              />
            </div>
            <img
              className="mobile"
              alt="??????????????????: ???????????????(??????:2~18???) (kg/m2)"
              src="/assets/image_mobile_calculator_bmi1.svg"
            />
            <p>
              ??? 1): 2~2.5??? 2????????? 2.5???????????? ???????????? ?????? ???????????? ????????????
              ?????????
            </p>
            <p>
              ??? 2): 5th ?????? : ?????????, 85th ??? ????????????(?????????) {'<'} 95th, 95th
              ?????? ?????? BMI 25 kg/m2?????? : ??????
            </p>

            <h1>
              ??????????????????: ???????????????(??????:2~18???) (kg/m<sup>2</sup>)
            </h1>
            <div className="desktop">
              <Image
                alt="??????????????????: ???????????????(??????:2~18???) (kg/m2)"
                src="/assets/image_calculator_bmi2.svg"
                width="1200"
                height="787"
              />
            </div>
            <img
              className="mobile"
              alt="??????????????????: ???????????????(??????:2~18???) (kg/m2)"
              src="/assets/image_mobile_calculator_bmi2.svg"
            />
            <p>??????: ??????????????????, 2007??? ??????????????? ??????????????????</p>
          </div>
        </Content>
      </ContentSection>
      <Spacer size={180} mobileSize={100} />
      <Footer />
    </>
  );
};

export default BMI;
