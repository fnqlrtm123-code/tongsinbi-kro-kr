'use client';

import React from 'react';
import { Sparkles, TrendingUp, ShieldCheck, ExternalLink, Users, Banknote } from 'lucide-react';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export default function LiveStatsTicker() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white border-b border-indigo-900/50 text-xs py-2.5 px-4 shadow-inner overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Side: Live Ticker Badges */}
        <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
          <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-2.5 py-0.5 rounded-full text-[11px] shadow-sm animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            실시간 업데이트
          </span>

          <div className="flex items-center gap-4 text-slate-300 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-blue-400" />
              오늘 조회자: <strong className="text-white font-black">14,892명</strong>
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="flex items-center gap-1.5">
              <Banknote className="w-3.5 h-3.5 text-emerald-400" />
              1인 평균 환급액: <strong className="text-emerald-400 font-black">54,300원</strong>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
              5년 소멸시효 직전 환급급증
            </span>
          </div>
        </div>

        {/* Right Side: Quick Action Button */}
        <a
          href={TARGET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black px-3 py-1 rounded-full text-[11px] sm:text-xs transition-all shadow-md hover:scale-105 shrink-0"
        >
          <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
          <span>미환급금 1분 즉시 조회 ↗</span>
        </a>
      </div>
    </div>
  );
}
