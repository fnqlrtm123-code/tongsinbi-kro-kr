import React from 'react';
import SmartChoiceGuide from '@/components/SmartChoiceGuide';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '스마트초이스 통신비 미환급금 통합조회 신청방법',
  description:
    '방송통신위원회 공식 스마트초이스(smartchoice.or.kr)를 통한 SKT, KT, LGU+, 알뜰폰 통신비 미환급금 1분 통합 조회 및 계좌 입금 신청 절차 안내.',
};

export default function SmartChoicePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 text-gray-900">
      <div className="border-b border-gray-300 pb-4">
        <h1 className="text-2xl font-extrabold text-gray-900">스마트초이스 통신비 미환급금 1분 통합조회</h1>
        <p className="text-sm text-gray-600 mt-1">
          정부 공식 통합조회 포털 스마트초이스 이용방법 및 환급 절차를 상세히 안내해 드립니다.
        </p>
      </div>

      <SmartChoiceGuide />
    </div>
  );
}
