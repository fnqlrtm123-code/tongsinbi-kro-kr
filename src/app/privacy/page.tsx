import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 text-gray-900 text-sm">
      <div className="border-b border-gray-300 pb-4">
        <h1 className="text-2xl font-extrabold">개인정보 처리방침</h1>
        <p className="text-xs text-gray-500 mt-1">최종 수정일: 2026년 7월 27일</p>
      </div>

      <div className="space-y-4 leading-relaxed text-gray-700">
        <p>
          통신비미환급금조회 포털(통신비환급금조회.kro.kr, 이하 &quot;본 사이트&quot;)은 이용자의 개인정보보호를 매우 중요시하며, 「개인정보 보호법」 등 관련 법령을 준수합니다.
        </p>

        <h3 className="font-bold text-gray-900 text-base pt-2">1. 개인정보 수집 항목 및 방법</h3>
        <p>
          본 사이트는 회원가입 절차가 없으며, 이용자의 주민등록번호, 계좌 비밀번호, 금융 인증정보 등 개인식별정보를 일절 수집하거나 저장하지 않습니다.
        </p>

        <h3 className="font-bold text-gray-900 text-base pt-2">2. 비영리 정보안내 서비스 면책사항</h3>
        <p>
          본 사이트는 방송통신위원회 및 스마트초이스(smartchoice.or.kr)가 제공하는 미환급금 조회 서비스의 방법과 절차를 이용자에게 안내하는 독립된 정보 제공 서비스입니다. 실제 조회 및 환급 계좌 등록은 공식 스마트초이스 사이트에서 수행됩니다.
        </p>

        <h3 className="font-bold text-gray-900 text-base pt-2">3. 인터넷 접속 로그 및 쿠키 사용</h3>
        <p>
          사이트 이용 및 트래픽 통계 분석(Google Analytics 등)을 위하여 최소한의 익명 접속 로그 및 웹 쿠키 정보가 자동 생성될 수 있습니다. 이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.
        </p>
      </div>
    </div>
  );
}
