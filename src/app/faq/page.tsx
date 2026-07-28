import React from 'react';
import FaqSection from '@/components/FaqSection';
import FloatingMobileCta from '@/components/FloatingMobileCta';
import { Metadata } from 'next';
import { Sparkles } from 'lucide-react';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export const metadata: Metadata = {
  title: '통신비 미환급금 자주 묻는 질문 (FAQ)',
  description:
    '통신비 미환급금 발생 이유, 무료 조회 여부, 5년 소멸시효, 가족 대리 신청 가능 여부 등 자주 발생하는 궁금증을 한곳에서 확인하세요.',
};

export default function FaqPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 py-8 px-4 space-y-8 pb-20 lg:pb-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xs">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>궁금증 완벽 해결</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900">
            통신비 미환급금 자주 묻는 질문 (FAQ)
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            미환급금의 정의부터 발생 원인, 소멸시효 5년 규정 및 환급 계좌 입금 절차에 관한 모든 내용을 안내합니다.
          </p>

          <div className="pt-2">
            <a
              href={TARGET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-sm rounded-xl shadow-md transition-transform hover:scale-105"
            >
              <span>내 미환급금 1분 조회하기 ↗</span>
            </a>
          </div>
        </div>

        <FaqSection />
      </div>

      <FloatingMobileCta />
    </div>
  );
}
