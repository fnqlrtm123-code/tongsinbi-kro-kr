import React from 'react';
import SmartChoiceGuide from '@/components/SmartChoiceGuide';
import FloatingMobileCta from '@/components/FloatingMobileCta';
import { Metadata } from 'next';
import { Sparkles } from 'lucide-react';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export const metadata: Metadata = {
  title: '스마트초이스 통신비 미환급금 통합조회 및 계좌 환급 신청',
  description:
    '방송통신위원회 스마트초이스(SmartChoice)를 통한 SKT, KT, LGU+, 알뜰폰 통신비 미환급금 1분 통합 조회 및 본인 계좌 환급 신청 절차 완벽 안내.',
};

export default function SmartChoicePage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 py-8 px-4 space-y-8 pb-20 lg:pb-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xs">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>정부 공식 100% 무료 연동 서비스</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900">
            스마트초이스 통신비 미환급금 1분 통합조회
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            SKT, KT, LG유플러스 및 알뜰폰 4개 통신사에 남아있는 요금 과오납금과 단말기 보증금을 스마트초이스를 통해 1분 만에 일괄 조회하고 지정 계좌로 반환받으세요.
          </p>

          <div className="pt-2">
            <a
              href={TARGET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-sm rounded-xl shadow-md transition-transform hover:scale-105"
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
