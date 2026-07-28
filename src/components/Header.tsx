'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Sparkles, ShieldCheck } from 'lucide-react';
import LiveStatsTicker from './LiveStatsTicker';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-md">
      {/* Live Stats Ticker */}
      <LiveStatsTicker />

      {/* Main Header Bar */}
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            통신
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-black text-white text-base sm:text-lg tracking-tight">
                통신비미환급금조회
              </span>
              <span className="bg-blue-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded">
                kro.kr
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium">
              방송통신위원회 미환급금 1분 통합 조회
            </span>
          </div>
        </Link>

        {/* Direct Action Button (NO navigation category links as requested) */}
        <div className="flex items-center gap-3">
          <a
            href={TARGET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-600 hover:from-blue-600 hover:to-indigo-700 text-white font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 animate-pulse"
          >
            <Search className="w-4 h-4 text-cyan-300" />
            <span>미환급금 1분 조회 ↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
