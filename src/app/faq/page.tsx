import React from 'react';
import FaqSection from '@/components/FaqSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '통신비 환급금 자주 묻는 질문 (FAQ)',
  description:
    '통신비 미환급금 소멸시효(5년), 무료 조회 여부, 본인 명의 계좌 입금 절차, 스미싱 예방법 등 자주 묻는 질문 완벽 답변 모음.',
};

export default function FaqPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 text-gray-900">
      <div className="border-b border-gray-300 pb-4">
        <h1 className="text-2xl font-extrabold text-gray-900">통신비 미환급금 자주 묻는 질문 (FAQ)</h1>
        <p className="text-sm text-gray-600 mt-1">
          미환급금 조회 및 신청 과정에서 이용자들이 가장 궁금해하시는 핵심 질문과 답변입니다.
        </p>
      </div>

      <FaqSection />
    </div>
  );
}
