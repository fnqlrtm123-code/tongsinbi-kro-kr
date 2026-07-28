import React from 'react';
import DiscountsGuide from '@/components/DiscountsGuide';
import FloatingMobileCta from '@/components/FloatingMobileCta';
import { Metadata } from 'next';
import { Sparkles } from 'lucide-react';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export const metadata: Metadata = {
  title: '통신비 복지 요금 감면 자격 및 혜택 신청 방법 (월 최대 33,500원)',
  description:
    '기초생활수급자, 차상위계층, 장애인, 국가유공자, 기초연금수급자 어르신 대상 월 최대 33,500원 통신비 감면 복지 혜택 신청 방법 안내.',
};

export default function DiscountsPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 py-8 px-4 space-y-8 pb-20 lg:pb-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xs">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>정부 감면 복지 혜택</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900">
            통신비 복지 요금 감면 대상자 및 혜택 가이드
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            환급금 신청 외에도 대상에 해당하시는 경우 매월 납부하는 통신비를 최대 33,500원까지 차감해드리는 요금 감면 제도입니다.
          </p>

          <div className="pt-2">
            <a
              href={TARGET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm rounded-xl shadow-md transition-transform hover:scale-105"
            >
              <span>요금 감면자격 1분 확인 ↗</span>
            </a>
          </div>
        </div>

        <DiscountsGuide />
      </div>

      <FloatingMobileCta />
    </div>
  );
}
