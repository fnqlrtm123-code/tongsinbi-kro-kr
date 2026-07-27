import React from 'react';
import DiscountsGuide from '@/components/DiscountsGuide';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '통신비 복지 요금감면 대상자 및 혜택 신청 가이드',
  description:
    '기초생활수급자, 차상위계층, 장애인, 국가유공자, 만 65세 이상 기초연금수급자 통신비 요금감면(월 최대 33,500원 할인) 대상자 및 114 간편 신청방법.',
};

export default function DiscountsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 text-gray-900">
      <div className="border-b border-gray-300 pb-4">
        <h1 className="text-2xl font-extrabold text-gray-900">통신비 복지 요금감면 혜택 안내</h1>
        <p className="text-sm text-gray-600 mt-1">
          정부 복지 혜택에 따른 월 통신비 요금 감면 신청 자격과 할인 금액을 확인하세요.
        </p>
      </div>

      <DiscountsGuide />
    </div>
  );
}
