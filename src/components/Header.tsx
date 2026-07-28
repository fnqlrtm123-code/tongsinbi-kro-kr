'use client';

import React from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      {/* Main Header Bar */}
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-xs shadow-sm">
            통신
          </div>
          <div className="flex flex-col">
            <span className="font-black text-slate-900 text-base sm:text-lg tracking-tight">
              통신비미환급금조회
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              방송통신위원회 미환급금 1분 통합 안내 포털
            </span>
          </div>
        </Link>

        {/* Direct Action Button */}
        <div>
          <a
            href={TARGET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            <Search className="w-4 h-4" />
            <span>미환급금 1분 조회 ↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
