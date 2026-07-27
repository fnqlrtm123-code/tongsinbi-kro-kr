import React from 'react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 text-gray-900 text-sm">
      <div className="border-b border-gray-300 pb-4">
        <h1 className="text-2xl font-extrabold">이용약관</h1>
        <p className="text-xs text-gray-500 mt-1">최종 수정일: 2026년 7월 27일</p>
      </div>

      <div className="space-y-4 leading-relaxed text-gray-700">
        <h3 className="font-bold text-gray-900 text-base">제1조 (목적)</h3>
        <p>
          본 약관은 통신비환급금조회.kro.kr(이하 &quot;사이트&quot;)가 제공하는 통신비 미환급금 조회 안내 서비스의 이용조건 및 절차에 관한 사항을 규정함을 목적의 합니다.
        </p>

        <h3 className="font-bold text-gray-900 text-base">제2조 (서비스의 내용)</h3>
        <p>
          사이트는 이용자에게 스마트초이스 미환급금 조회 방법, SKT, KT, LGU+, 알뜰폰 환급 신청 절차 및 요금감면 안내 정보를 무료로 제공합니다.
        </p>

        <h3 className="font-bold text-gray-900 text-base">제3조 (저작권 및 정보 이용)</h3>
        <p>
          사이트에서 제공하는 콘텐츠는 이용자의 편의를 위하여 작성된 정보이며, 상업적 무단 복제 및 불법 스미싱 용도로의 무단 도용을 금지합니다.
        </p>
      </div>
    </div>
  );
}
