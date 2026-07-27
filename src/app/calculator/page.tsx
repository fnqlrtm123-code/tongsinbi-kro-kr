import React from 'react';
import RefundCalculator from '@/components/RefundCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '통신비 미환급금 3초 예상 계산기',
  description:
    '이중 자동이체 출금액, 해지 후 과오납 정산금, 미반환 단말기 보증금 내역을 바탕으로 본인의 통신비 예상 환급금을 3초 만에 자동 계산해 보세요.',
};

export default function CalculatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 text-gray-900">
      <div className="border-b border-gray-300 pb-4">
        <h1 className="text-2xl font-extrabold text-gray-900">통신비 미환급금 3초 예상 자동 계산기</h1>
        <p className="text-sm text-gray-600 mt-1">
          간단한 옵션 선택으로 내가 받을 수 있는 예상 미환급금을 계산하고 스마트초이스에서 확인하세요.
        </p>
      </div>

      <RefundCalculator />
    </div>
  );
}
