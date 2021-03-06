import ContentSection from '@/components/ContentSection';
import Content from '@/components/hsin/terms/Content';
import { Spacer } from '@/components/Flex';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import SectionTitle from '@/components/SectionTitle';
import type {NextPage} from 'next';

const Notices: NextPage = () => {

  return <>
    <Nav />
    <ContentSection className={`font-notosans`}>
      <Spacer size={64} mobileSize={0} />
      <SectionTitle className="desktop" label="이용약관" emphasis />
    </ContentSection>

    <ContentSection className={`font-notosans`}>
      <Content>
        <h1>제1장 총 칙</h1>

        <h2>제1조 (목 적)</h2>
        <p>이 약관은 본 학회에서 제공하는 서비스에 대하여 회원들에게 이용조건 및 절차에 관한 기본적인 사항과 규정을 확인하도록 하는 것을 목적으로 한다.</p>

        <h2>제2조 (약관의 효력 및 변경)</h2>
        <p>① 이 약관의 내용은 회원가입 시 동의와 공지에 의해서 효력을 발생한다.</p>
        <p>② 본 사이트 운영위가 필요하다고 인정되는 경우 이 규칙의 내용을 개정(변경, 삭제 또는 추가) 할 수 있으며, 개정된 규칙은 상기 제①항과 같은 방법으로 효력을 발생한다.</p>

        <h2>제3조 (약관 외 준칙)</h2>
        <p>이 약관에 명시되지 않은 사항은 전기통신기본법, 전기 통신사업법 및 기타 관련법령의 규정에 의한다.</p>

        <h2>제4조 (회원의 범위)</h2>
        <p>① 회원가입을 한 자에 한해 회원임을 규정한다.</p>
        <p>② 비회원은 특정 영역의 게시판을 사용할 수 없다.</p>
        <p>③ 기타 언급되지 않은 사항은 일반 통상적 회원가입 기준을 따른다.</p>

        <h2>제5조 (회원의 의무)</h2>
        <p>① 회원은 이 약관에서 규정하는 사항과 공지된 사항을 준수해야 한다.</p>
        <p>② 정식회원은 아래 각 호의 행위를 하여서는 안된다.</p>
        <p>1. 정당한 이유 없이 타인의 명예를 손상시키거나 권리를 침해하는 행위</p>
        <p>2. 공공질서 또는 미풍양속을 해하는 행위</p>
        <p>3. 본 사이트의 명예를 손상시키거나 운영을 방해하는 행위</p>
        <p>4. 국가안전을 위협하거나 범죄와 결부된다고 인정되는 행위</p>
        <p>5. 본 약관에 위반하여 회원활동을 하는 행위</p>
        <p>6. 기타 현행법에 위배되는 행위</p>


        <h1>제2장 이용계약의 체결</h1>

        <h2>제6조 (이용계약의 성립)</h2>
        <p>이용자는 이 약관에 동의한다는 의사표시를 한 후 학회가 정한 가입양식에 따라 회원정보를 기입하고 학회의 승낙이 이루어짐으로써 학회의 서비스를 제공 받을 수 있다.</p>

        <h2>제7조 (이용신청의 승낙유보 및 거절)</h2>
        <p>① 학회는 다음 각 호의 사항 발생 시에는 이용희망자의 이용신청에 대해 그 승낙을 유보하거나 거절할 수 있다.</p>
        <p>1. 다른 사람명의를 사용하여 신청한 경우</p>
        <p>2. 이용자 정보를 허위로 기재하여 신청한 경우</p>
        <p>3. 학회의 사정상 필요하다고 인정되는 경우</p>
        <p>4. 사회의 공공질서 또는 미풍양속을 저해할 목적인 경우</p>
        <p>5. 기타 이용희망자의 귀책사유로 이용승낙이 곤란한 경우</p>
        <p>6. 만 14세미만의 아동이 법정대리인의 사전 동의 없이 신청한 경우</p>
        <p>7. 기타 학회가 정한 이용신청 요건에 충족되지 않는 경우</p>
        <p>② 학회는 1항의 규정에 의하여 이용신청이 거절되거나 승낙이 유보되는 경우에는 이를 이용 신청고객에게 이메일을 통해 알린다.</p>

        <h2>제8조 (이용계약사항의 변경)</h2>
        <p>회원은 이용신청시 학회의 가입신청서에 기재한 정보가 변경된 경우에는 이를 신속히 변경하여야 하며, 변경하지 않은 정보로 인하여 발생한 문제에 대해서는 이용자에게 책임이 있다.</p>

        <h1>제3장 의 무</h1>

        <h2>제8조 (학회의 의무)</h2>
        <p>① 학회는 법령과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 서비스를 제공하는 데 최선을 다한다.</p>
        <p>② 학회는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 철저히 관리한다.</p>
        <p>③ 학회는 학회회원으로부터 소정의 절차에 의해 제기되는 의견에 대해서는 적절한 절차를 거처 처리하며, 처리 시 일정기간이 소요될 경우에는 학회회원에게 그 사유와 처리일정을 알려준다.</p>

        <h2>제9조 (이용자의 의무)</h2>
        <p>① 학회회원은 이 약관에서 규정하는 사항과 서비스 이용안내 및 주의사항을 준수하여야 합니다.</p>
        <p>② 학회회원은 서비스의 일부로 보내지는 학회의 전자우편 및 정보를 받는 것에 동의합니다.</p>
        <p>③ 다음 각 호1에 해당하는 행위로 발생하는 결과에 대한 책임은 학회회원에게 있습니다.</p>
        <p>1. 학회회원은 자신의 아이디(ID)와 비밀번호를 관리할 의무를 가지며, 학회회원의 아이디와 비밀번호의 관리소홀로 인하여 발생된 피해</p>
        <p>2. 학회의 사전 서면 동의없는 영리목적의 영업행위 및 사회의 공공질서 또는 미풍양속을 저해할 목적으로 서비스를 이용하는 경우</p>
        <p>3. 학회회원이 서비스를 이용하여 게재한 게시물 또는 컨텐츠 등으로 타인에게 손해를 가한 경우</p>
        <p>4. 학회회원이 서비스를 이용하여 불법적으로 타인에게 해를 입히거나, 명예를 훼손, 지적재산권을 침해하는 경우</p>
        <p>④ 학회회원은 이 약관 및 관계법령에서 규정한 사항을 준수한다.</p>

        <h2>제10조 (개인정보의 보호)</h2>
        <p>① 학회는 개인정보보호 등과 관련된 관계법령에 따라 이용신청시 제공받는 학회회원의 개인정보, 추후에 추가로 제공받는 개인정보 및 서비스 이용 중 생성되는 개인정보를 보호한다.</p>
        <p>② 개인정보의 수집목적 및 이용목적은 다음 각 호와 같으며, 이 한도 내에서는 학회회원은 개인정보의 수집 및 이용에 대하여 이 약관을 통하여 동의한다.</p>
        <p>1. 서비스 제공과 학회회원관리</p>
        <p>2. 학회회원 전체 또는 일부의 개인정보에 관한 통계자료를 작성, 개인의 맞춤형서비스, 학술적인 연구, 공공목적을 위한 자료 제공, 시장조사를 위해 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우</p>
        <p>③ 학회는 서비스제공과 관련하여 취득한 학회회원의 정보를 본인의 사전승낙 없이 타인에게 누설 또는 배포할 수 없으며, 서비스관련 업무이외의 목적으로 사용할 수 없다.</p>
        <p>단. 아래사항에 해당하는 경우에는 예외로 한다.</p>
        <p>※ 전기통신기본법 및 관계법령에 의한 국가기관 및 관계기관의 요구가 있는 경우</p>
        <p>※ 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우</p>
        <p>④ 학회가 학회회원에게 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명 및 전화번호 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받는 자, 제공목적 및 제공할 정보의 내용)등 정보통신망이용촉진등에관한법률 제16조제3항이 규정한</p>
        <p>사항을 미리 명시하거나 고지해야 하며, 학회회원은 언제든지 이 동의를 철회할 수 있다.</p>
        <p>⑤ 학회회원은 언제든지 학회가 보유하고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며, 학회는 이에 대해 지체　없이 필요한 조치를 취할 의무를 진다. 또한 학회회원은 오류의 정정을 구한 경우에는 학회는 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않는다.</p>
        <p>⑦ 학회는 개인정보보호를 위하여 관리자를 정하여 자료관리에 최선의 노력을 기울이도록 하나 불가항력적인 상황에서 발생한 개인정보의 손상에 관하여는 복구에 기울이는 노력이상의 책임을 지지 않는다.</p>
        <p>⑧ 학회 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체 없이 파기한다.</p>

        <h1>제4장 서비스제공 및 이용</h1>

        <h2>제11조 (서비스 이용시간 및 제한)</h2>
        <p>① 서비스 이용은 학회의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간을 원칙으로 한다.</p>
        <p>② 학회는 서비스 및 특별한 내용에 대해서 이용시간 및 이용권한을 제한할 수 있다.</p>
        <p>③ 필요에 따라 일부서비스는 유료로 진행 될 수 있다.</p>

        <h2>제12조 (정보제공 및 광고게재)</h2>
        <p>학회는 학회회원에게 서비스제공을 위하여 전자메일, 서신우편을 제공할 수 있으며, 서비스 화면, 홈페이지, 이메일 등에 광고를 게재할 수 있습니다. 단, 학회는 광고주의 판촉활동에 학회회원이 참여하거나 교신한 결과로 발생하는 손해에 대해서는 책임지지 않는다.</p>

        <h2>제13조 (게시물등의 관리)</h2>
        <p>학회는 학회회원이 게시한 게시물이나 전송한 내용물이 다음 각 호1에 해당하는 경우에는 임의로 조치할 수 있다</p>
        <p>1. 타인에게 해를 입히거나 명예를 훼손하는 경우</p>
        <p>2. 타인의 지적재산권을 침해는 경우</p>
        <p>3. 사회의 공공질서 또는 미풍양속을 저해하는 경우</p>
        <p>4. 서비스의 운영에 지장을 줄 우려가 있는 경우</p>
        <p>5. 기타 관계법령에 위반되는 내용인 경우</p>

        <h2>제14조 (서비스내용변경)</h2>
        <p>서비스내용변경의 범위는 서비스 내용의 전체로 서비스 내용이 추가, 변경 또는 삭제되는 경우에는 필요한 사항을 학회회원들에게 공지하거나 통보한다.</p>

        <h1>부 칙</h1>
        <p>(시행일) 이 약관은 2014년 1월 1일부터 시행합니다.</p>
      </Content>
      <Spacer size={64} mobileSize={32} />

    </ContentSection>
    <Spacer size={180} mobileSize={100} />
    <Footer />
  </>;
};

export default Notices;