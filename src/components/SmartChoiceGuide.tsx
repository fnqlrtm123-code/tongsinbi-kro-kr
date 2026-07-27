import React from 'react';
import { Smartphone, CheckCircle, ExternalLink, ShieldAlert } from 'lucide-react';

export default function SmartChoiceGuide() {
  const steps = [
    {
      step: '01',
      title: '스마트초이스 접속',
      desc: '방송통신위원회 공식 미환급금 포털(smartchoice.or.kr)에 접속합니다.',
    },
    {
      step: '02',
      title: '통신비 미환급금 조회 선택',
      desc: '메인화면의 "통신 미환급금 조회" 버튼을 클릭합니다.',
    },
    {
      step: '03',
      title: '본인 인증 진행',
      desc: '이름, 주민등록번호, 카카오/네이버/통신사 간편인증을 통해 본인 확인을 진행합니다.',
    },
    {
      step: '04',
      title: '환급 계좌 입력 & 신청 완료',
      desc: '조회된 SKT, KT, LGU+, 알뜰폰 미환급금을 확인 후 본인 명의 입금 계좌를 등록합니다.',
    },
  ];

  return (
    <div className="border border-gray-300 rounded-lg p-5 sm:p-6 bg-white space-y-6">
      <div className="border-b border-gray-200 pb-3 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-900">스마트초이스 통신비 미환급금 1분 통합조회 방법</h2>
          <p className="text-xs text-gray-600 mt-1">
            SKT, KT, LG유플러스 및 알뜰폰 3사의 미환급금을 한 번에 일괄 조회하고 본인 계좌로 환급받는 방법입니다.
          </p>
        </div>
        <a
          href="https://www.smartchoice.or.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white text-xs font-bold rounded hover:bg-gray-800 transition-colors"
        >
          스마트초이스 이동 <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((item) => (
          <div key={item.step} className="border border-gray-200 rounded p-4 bg-gray-50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black bg-black text-white px-2 py-0.5 rounded">STEP {item.step}</span>
              <h4 className="font-bold text-gray-900 text-sm mt-2">{item.title}</h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Security Warning Notice */}
      <div className="bg-red-50 border border-red-200 rounded p-4 text-xs text-red-900 space-y-1">
        <div className="flex items-center gap-1.5 font-bold text-red-700">
          <ShieldAlert className="w-4 h-4" />
          <span>통신비 환급 관련 스미싱 사기 주의안내</span>
        </div>
        <p className="text-gray-700 leading-relaxed">
          정부기관 및 통신사는 절대로 환급금 지급을 이유로 <strong>계좌 비밀번호, 보안카드 번호, OTP 인증번호 또는 앱 설치를 요구하지 않습니다.</strong> 문자로 온 인터넷 링크(URL)를 함부로 클릭하지 마시고, 반드시 공식 스마트초이스(www.smartchoice.or.kr) 웹사이트를 통해 진행해 주세요.
        </p>
      </div>
    </div>
  );
}
