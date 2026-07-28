'use client';

import React from 'react';
import { Sparkles, TrendingUp, Users, Banknote } from 'lucide-react';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export default function LiveStatsTicker() {
  return (
    <div className="bg-blue-50 border-b border-blue-100 text-slate-800 text-xs py-2 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Ticker items */}
        <div className="flex items-center gap-2.5 flex-wrap justify-center md:justify-start text-[11px] sm:text-xs">
          <span className="inline-flex items-center gap-1 bg-blue-600 text-white font-bold px-2 py-0.5 rounded text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping"></span>
            실시간 업데이트
          </span>

          <span className="text-slate-400 font-normal">|</span>

          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            오늘 조회자: <strong className="text-blue-700 font-extrabold">14,892명</strong>
          </span>

          <span className="text-slate-400 font-normal">|</span>

          <span className="flex items-center gap-1">
            <Banknote className="w-3.5 h-3.5 text-emerald-600" />
            1인 평균 환급액: <strong className="text-emerald-700 font-extrabold">54,300원</strong>
          </span>

          <span className="text-slate-400 font-normal">|</span>

          <span className="flex items-center gap-1 font-bold text-slate-700">
            <TrendingUp className="w-3.5 h-3.5 text-rose-500" />
            5년 소멸시효 직전 환급급증
          </span>
        </div>

        {/* Right CTA Button */}
        <a
          href={TARGET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white font-black px-3 py-1 rounded text-[11px] sm:text-xs transition-colors shrink-0 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          <span>미환급금 1분 즉시 조회 ↗</span>
        </a>
      </div>
    </div>
  );
}
