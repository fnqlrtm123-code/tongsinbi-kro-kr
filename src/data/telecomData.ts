export interface TelecomInfo {
  id: string;
  name: string;
  category: '이통3사' | '알뜰폰';
  callCenter: string;
  arsNumber: string;
  websiteUrl: string;
  refundTypes: string[];
  inquiryMethod: string;
}

export const telecomList: TelecomInfo[] = [
  {
    id: 'skt',
    name: 'SK텔레콤 (SKT)',
    category: '이통3사',
    callCenter: '114 (무료) / 080-011-6000',
    arsNumber: '1599-0011',
    websiteUrl: 'https://www.tworld.co.kr',
    refundTypes: ['해지 후 이중납부금', '단말기 미반환 보증금', '소액과오납금', '설비보증금'],
    inquiryMethod: 'Tworld 로그인 > My > 요금조회 > 미환급금 조회 및 신청',
  },
  {
    id: 'kt',
    name: 'KT (케이티)',
    category: '이통3사',
    callCenter: '114 (무료) / 100',
    arsNumber: '1588-0010',
    websiteUrl: 'https://www.kt.com',
    refundTypes: ['해지 미정산 과오납금', '이중 자동이체 출금액', '단말기 보증금'],
    inquiryMethod: '마이케이티 앱/웹 > 마이페이지 > 요금납부 > 미환급금 조회/환급',
  },
  {
    id: 'lgu',
    name: 'LG유플러스 (LGU+)',
    category: '이통3사',
    callCenter: '114 (무료) / 1544-0010',
    arsNumber: '1544-0010',
    websiteUrl: 'https://www.lguplus.com',
    refundTypes: ['해지 후 요금 과오납', '단말기 할부금 이중납부', '보증금 미반환액'],
    inquiryMethod: 'U+모바일 매니저 > 마이페이지 > 요금조회 > 미환급금 신청',
  },
  {
    id: 'mvno-kct',
    name: '알뜰폰통합 (KCT/세븐모바일/헬로모바일 등)',
    category: '알뜰폰',
    callCenter: '각 알뜰폰 고객센터 (114)',
    arsNumber: '1670-0011',
    websiteUrl: 'https://www.smartchoice.or.kr',
    refundTypes: ['알뜰폰 해지 과오납금', '선불요금 잔액', '이중 자동이체 정산금'],
    inquiryMethod: '스마트초이스(Smartchoice) 통합조회 서비스를 통해 일괄 조회 가능',
  },
];

export const faqList = [
  {
    question: '통신비 미환급금이란 무엇이며 왜 발생하는 건가요?',
    answer:
      '통신비 미환급금은 유무선 전화나 인터넷, IPTV 해지 후 요금 정산 과정에서 발생한 과오납금(이중 납부, 요금 이중 출금)이나 단말기 보증금, 미반환 설비보증금 등이 고객에게 반환되지 않고 통신사에 남아있는 금액을 의미합니다. 자동이체 해지 지연이나 이사/명의 변경 시 정산 시점 차이로 자주 발생합니다.',
  },
  {
    question: '통신비 미환급금 조회를 위해 비용이 발생하거나 대행 수수료가 있나요?',
    answer:
      '절대 비용이 발생하지 않습니다. 방송통신위원회와 한국통신사업자연합회(KTOA)에서 운영하는 스마트초이스(SmartChoice) 및 각 통신사 공식 홈페이지를 통한 조회 및 환급 신청은 100% 무료 공공 서비스입니다. 수수료를 요구하거나 계좌 비밀번호/OTP를 요청하는 것은 보이스피싱 스미싱 사기이므로 절대 응하시면 안 됩니다.',
  },
  {
    question: '미환급금 조회 및 신청 가능 시간은 언제인가요?',
    answer:
      '스마트초이스 온라인 통합조회 서비스는 평일 및 주말/공휴일 관계없이 09:00 ~ 20:00 (상시) 조회가 가능합니다. 본인명의 신용카드, 카카오/네이버 간편인증 또는 공인인증서로 본인 확인 후 즉시 환급 신청 계좌를 등록하실 수 있습니다.',
  },
  {
    question: '가족이나 타인 명의의 통신비 미환급금도 대신 조회할 수 있나요?',
    answer:
      '개인정보보호법 및 금융실명제에 따라 통신비 미환급금 조회 및 신청은 본인 명의 인증을 통해서만 가능합니다. 단, 사망자의 미환급금은 지점 방문 시 제적등본 및 법정대리인 증명서류를 제출하여 신청하실 수 있습니다.',
  },
  {
    question: '통신비 미환급금 소멸시효(유효기간)는 얼마나 되나요?',
    answer:
      '상법상 통신 채권 소멸시효는 5년입니다. 발생일로부터 5년이 지나면 통신사 수익으로 귀속될 수 있으므로 번호이동이나 통신사 해지 경험이 있으신 경우 지금 즉시 조회해 보시는 것을 권장합니다.',
  },
];
