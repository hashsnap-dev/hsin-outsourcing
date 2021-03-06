import { FC } from 'react';
import styled, { css } from 'styled-components';
import { AquaBlue, AquaBlue500, AquaBlue550, Gray300, Gray500, Gray600 } from '@/styles/variables';
import Link from '@/components/Link';
import { desktop, flex, mobile } from '@/styles/utils';

const Container = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${Gray300};
  margin: 10px auto 0 auto;
  align-items: center;
  
${desktop(css`
  height: 64px;

  .c1 {
    width: 50%;
    padding: 0 28px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;

    b {
      color: #2c2f31;
      font-size: 18px;
      font-weight: 800;
    }
    span {
      display: block;
      color: ${Gray500};
      font-size: 15px;
    }
    a {
      color: #217fef;
      font-weight: 500;
    }
  }
  .VHr {
    height: 32px;
    border-left: 1px solid ${Gray300};
  }
  .c2 {
    width: 50%;
    box-sizing: border-box;
    padding: 0 37px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      ${flex('center', 'space-between')}
      flex: 1;
    }

    b {
      color: #2c2f31;
      font-size: 18px;
      font-weight: 700;
      width: 100px;
    }

    a {
      color: ${AquaBlue500};
      font-weight: 500;
    }
    .s1,
    .s2 {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .s1 {
      padding-left: 28px;
      background: url(/assets/icon_shortcut_1.png) no-repeat;
    }
    .s2 {
      padding-left: 28px;
      background: url(/assets/icon_shortcut_2.png) no-repeat;
    }
  }
`)}

${mobile(css`
  flex-direction: column;
  b {
    font-size: 18px;
    font-weight: 800;
    color: ${Gray600};
  }

  .c1 {
    width: 100%;
    border-bottom: 1px solid ${Gray300};
    height: 70px;
    ${flex('center', 'space-between')}
    padding: 0 20px;

    span { display: none; }
    a {
      font-weight: 500;
      color: ${AquaBlue};
    }
  }

  .c2 {
    width: 100%;
    height: 100px;
    ${flex('center', 'space-between')}
    padding: 0 20px;

    div {
      ${flex()}
      flex-direction: column;
      color: ${AquaBlue550};
      font-weight: 500;
      
      a {
        margin-top: 16px;
      }
      a:first-child {
        margin-top: 0;
      }
    }
  }
`)}
`;

const ServiceShortcut: FC<{}> = ({ }) => {
  return (
    <Container className="font-notosans">
      <div className="c1">
        <b className="font-nanumsquare">?????? ?????????</b>
        <span>???????????? ?????? ??????????????????, ???????????? ???????????? ?????? ??????????</span>
        <Link href="/calculator/intake">????????????</Link>
      </div>
      <div className="VHr" />
      <div className="c2">
        <b className="font-nanumsquare">?????? ??????</b>
        <div>
          <Link className="s1" href="/riskinformation/oversea_food_danger">
            ???????????? ?????? ?????? ?????? ??????
          </Link>
          <Link className="s2" href="/riskinformation/domestic_food_danger">
            ?????? ?????? ?????? ?????? ??????
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ServiceShortcut;
