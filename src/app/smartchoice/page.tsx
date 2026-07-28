import React from 'react';
import SmartChoiceGuide from '@/components/SmartChoiceGuide';
import FloatingMobileCta from '@/components/FloatingMobileCta';
import { Metadata } from 'next';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export const metadata: Metadata = {
  title: '스마트초이스 통신비 미환급금 통합조회 및 계좌 환급 신청',
  description:
    '방송통신위원회 스마트초이스(SmartChoice)를 통한 SKT, KT, LGU+, 알뜰폰 통신비 미환급금 1분 통합 조회 및 본인 계좌 환급 신청 절차 완벽 안내.',
};

export default function SmartChoicePage() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 py-10 px-4 space-y-8 pb-20 lg:pb-10">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>정부 공식 100% 무료 연동 포털</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white">
            스마트초이스 통신비 미환급금 1분 통합조회
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            SKT, KT, LG유플러스 및 알뜰폰 4개 통신사에 남아있는 요금 과오납금과 단말기 보증금을 스마트초이스를 통해 1분 만에 일괄 조회하고 지정 계좌로 반환받으세요.
          </p>

          <div className="pt-2">
            <a
              href={TARGET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-black text-sm rounded-xl shadow-lg shadow-blue-500/25 transition-transform hover:scale-105"
            >
              <span>스마트초이스 1분 미환급금 조회 ↗</span>
            </a>
          </div>
        </div>

        <SmartChoiceGuide />
      </div>

      <FloatingMobileCta />
    </div>
  );
}
