'use client';

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export default function FloatingMobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 lg:hidden shadow-2xl">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex flex-col text-white">
          <span className="text-[10px] text-cyan-300 font-extrabold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            소멸시효 5년 이내 조회 필수
          </span>
          <span className="text-xs font-black">내 통신비 미환급금 조회</span>
        </div>

        <a
          href={TARGET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-600 hover:from-blue-600 hover:to-indigo-700 text-white font-black text-xs rounded-xl text-center flex items-center justify-center gap-1.5 shadow-lg shadow-blue-500/30 active:scale-95 transition-transform"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
          <span>1분 즉시 조회 ↗</span>
        </a>
      </div>
    </div>
  );
}
