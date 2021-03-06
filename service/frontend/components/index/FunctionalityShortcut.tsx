import { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import {
  AquaBlue,
  AquaBlue150,
  AquaBlue50,
  Gray100,
  Gray200,
  Gray300,
  Gray600,
} from '@/styles/variables';
import Link from '@/components/Link';
import { desktop, flexCenter, mobile } from '@/styles/utils';

const CardContainer = styled(Link)<{ icon: string }>`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  background: url(${({ icon }) => icon}) no-repeat center 17px / 100px;
  background-position: center;
  font-weight: 500;
  transition: background-size 0.1s, color 0.3s;
  &:hover {
    background-size: 120px;
    color: ${AquaBlue};
  }
`;

const PrimaryFuncCard: FC<{ icon: string; title: string; href: string }> = ({
  icon,
  title,
  href,
}) => {
  return (
    <CardContainer href={href} icon={icon}>
      <p>{title}</p>
    </CardContainer>
  );
};

const Container = styled.div`
  margin-top: 18px;
  display: flex;
  box-shadow: 0 0 0 3px ${Gray200};
  font-size: 14px;

  ${desktop(css`
    .c1,
    .c2 {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      height: 100%;
    }

    .c1 {
      padding: 0 15px;
      background: white;
    }
    .c2 {
      box-shadow: inset 0 0 0 0.5px ${Gray200};
    }
    .c2 a {
      width: 25%;
      height: 50px;
      text-align: center;
      background: white;
      transition: color 0.3s, background 0.3s, box-shadow 0.3s;
      box-shadow: inset 0 0 0 0.5px ${Gray200}, 0 0 0 0.5px ${Gray200};

      &:hover {
        color: ${AquaBlue};
        font-weight: 500;
        position: relative;
        background: ${AquaBlue50};
        box-shadow: inset 0 0 0 0.5px ${AquaBlue150}, 0 0 0 0.5px ${AquaBlue150};
      }
    }
    ${CardContainer} {
      width: 20%;
      height: 150px;
      padding-bottom: 17px;
    }
    .more {
      display: none;
    }
  `)}

  ${mobile(css`
    flex-direction: column;

    .c1,
    .c2 {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      height: 100%;
    }
    ${CardContainer} {
      width: 25%;
      height: 135px;
      background-size: 80px 80px;

      p {
        height: 36px;
      }
    }
    .c2 {
      display: none;

      a {
        width: 50%;
        height: 50px;
        box-shadow: inset 0 0 0 0.5px ${Gray200}, 0 0 0 0.5px ${Gray200};
        font-size: 14px;

        &:hover {
          color: ${AquaBlue};
          font-weight: 500;
          position: relative;
          background: ${AquaBlue50};
          box-shadow: inset 0 0 0 0.5px ${AquaBlue150},
            0 0 0 0.5px ${AquaBlue150};
        }
      }
    }
    .more {
      ${flexCenter()}
      cursor: pointer;
      height: 40px;
      font-size: 14px;
      color: ${Gray600};
      background: ${Gray100};
    }
    .show_mobile {
      display: flex;
    }
  `)}
`;

const FunctionalityShortcut: FC<{}> = () => {
  const [showExtraMats, setShowExtraMats] = useState(false);

  return (
    <Container className="font-notosans">
      <div className="c1">
        <PrimaryFuncCard
          icon="https://health-functional-food.s3.ap-northeast-2.amazonaws.com/physiology/HSIN_Icon_functionality_100x100-06.svg"
          title="??????????????????"
          href="/search/functionality/3-6"
        />
        <PrimaryFuncCard
          icon="https://health-functional-food.s3.ap-northeast-2.amazonaws.com/physiology/HSIN_Icon_functionality_100x100-11.svg"
          title="????????????"
          href="/search/functionality/3-11"
        />
        <PrimaryFuncCard
          icon="https://health-functional-food.s3.ap-northeast-2.amazonaws.com/physiology/HSIN_Icon_functionality_100x100-12.svg"
          title="???????????????"
          href="/search/functionality/3-12"
        />
        <PrimaryFuncCard
          icon="https://health-functional-food.s3.ap-northeast-2.amazonaws.com/physiology/HSIN_Icon_functionality_100x100-24.svg"
          title="????????? ?????? ??????"
          href="/search/functionality/3-24"
        />
        <PrimaryFuncCard
          icon="https://health-functional-food.s3.ap-northeast-2.amazonaws.com/physiology/HSIN_Icon_functionality_100x100-05.svg"
          title="????????? ??????"
          href="/search/functionality/3-5"
        />
        <PrimaryFuncCard
          icon="https://health-functional-food.s3.ap-northeast-2.amazonaws.com/physiology/HSIN_Icon_functionality_100x100-14.svg"
          title="??? ??????"
          href="/search/functionality/3-14"
        />
        <PrimaryFuncCard
          icon="https://health-functional-food.s3.ap-northeast-2.amazonaws.com/physiology/HSIN_Icon_functionality_100x100-10.svg"
          title="?????? ???????????? ??????"
          href="/search/functionality/3-10"
        />
        <PrimaryFuncCard
          icon="https://health-functional-food.s3.ap-northeast-2.amazonaws.com/physiology/HSIN_Icon_functionality_100x100-01.svg"
          title="??? ??????"
          href="/search/functionality/3-1"
        />
        <PrimaryFuncCard
          icon="https://health-functional-food.s3.ap-northeast-2.amazonaws.com/physiology/HSIN_Icon_functionality_100x100-08.svg"
          title="?????? ??????"
          href="/search/functionality/3-8"
        />
        <PrimaryFuncCard
          icon="https://health-functional-food.s3.ap-northeast-2.amazonaws.com/physiology/HSIN_Icon_functionality_100x100-13.svg"
          title="??? ??????"
          href="/search/functionality/3-13"
        />
      </div>
      {!showExtraMats && (
        <div className="more" onClick={() => setShowExtraMats(true)}>
          ?????????
        </div>
      )}
      <div className={'c2 ' + (showExtraMats ? 'show_mobile' : '')}>
        <Link className="flex-center" href="/search/functionality/3-7">
          ?????????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-22">
          ????????????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-18">
          ?????? ?????? ??????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-4">
          ?????? ??????????????? ??????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-3">
          ??????/??? ??????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-19">
          ???????????? ??????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-31">
          ????????? ?????? ??????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-2">
          ?????? ??????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-34">
          ?????? ??????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-17">
          ????????? ??????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-9">
          ?????? ??????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-30">
          ????????? ?????? ??????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-29">
          ?????? ??? ??????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-27">
          ??? ??????/????????????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-15">
          ????????????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-16">
          ???????????? ??????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-32">
          ????????? ??????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-25">
          ?????? ?????? ?????? ??????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-33">
          ?????? ??????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-23">
          ????????? ?????? ??????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-20">
          ?????? ??????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-26">
          ??????????????????
        </Link>
        <Link className="flex-center" href="/search/functionality/3-28">
          ?????? ?????????
        </Link>
        <Link className="flex-center" href="/search/functionality">
          ?????????+
        </Link>
      </div>
    </Container>
  );
};

export default FunctionalityShortcut;
