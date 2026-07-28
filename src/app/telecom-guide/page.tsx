import React from 'react';
import TelecomGuide from '@/components/TelecomGuide';
import FloatingMobileCta from '@/components/FloatingMobileCta';
import { Metadata } from 'next';
import { Sparkles } from 'lucide-react';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export const metadata: Metadata = {
  title: '통신 4사(SKT·KT·LGU+·알뜰폰) 미환급금 개별 조회 가이드',
  description:
    'SKT, KT, LG유플러스, 알뜰폰 각 통신사 고객센터 ARS 및 공식 홈페이지를 통한 요금 이중출금 과오납 미환급금 조회 방법 완벽 정리.',
};

export default function TelecomGuidePage() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 py-10 px-4 space-y-8 pb-20 lg:pb-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>주요 통신사별 과오납 종합 안내</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white">
            SKT / KT / LGU+ / 알뜰폰 통신비 미환급금 가이드
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            이동통신 3사 및 알뜰폰 사업자별 미환급금 유형과 고객센터 문의 전화번호, 개별 확인 절차를 제공합니다.
          </p>

          <div className="pt-2">
            <a
              href={TARGET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-black text-sm rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              <span>통신 4사 미환급금 1분 일괄조회 ↗</span>
            </a>
          </div>
        </div>

        <TelecomGuide />
      </div>

      <FloatingMobileCta />
    </div>
  );
}
