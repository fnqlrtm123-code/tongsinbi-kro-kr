import React from 'react';
import RefundCalculator from '@/components/RefundCalculator';
import FloatingMobileCta from '@/components/FloatingMobileCta';
import { Metadata } from 'next';
import { Sparkles } from 'lucide-react';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export const metadata: Metadata = {
  title: '통신비 미환급금 3초 예상 자동 계산기',
  description:
    '이중 자동이체 출금액, 해지 후 과오납 정산금, 미반환 단말기 보증금 내역을 바탕으로 본인의 통신비 예상 환급금을 3초 만에 자동 계산해 보세요.',
};

export default function CalculatorPage() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 py-10 px-4 space-y-8 pb-20 lg:pb-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>실시간 자동 시뮬레이션</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white">
            통신비 미환급금 3초 예상 자동 계산기
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            해지 횟수, 이중출금 경험, 단말기 보증금 여부를 선택하고 내가 받을 수 있는 예상 미환급금을 즉시 산출해보세요.
          </p>

          <div className="pt-2">
            <a
              href={TARGET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-black text-sm rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              <span>실제 미환급금 1분 즉시 조회 ↗</span>
            </a>
          </div>
        </div>

        <RefundCalculator />
      </div>

      <FloatingMobileCta />
    </div>
  );
}
