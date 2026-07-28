'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShieldCheck, Search, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import LiveStatsTicker from './LiveStatsTicker';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Live Stats Ticker */}
      <LiveStatsTicker />

      {/* Main Navigation Header */}
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-black text-sm shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            통신
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-black text-slate-900 text-base sm:text-lg tracking-tight">
                통신비미환급금조회
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded">
                kro.kr
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-medium">
              방송통신위원회 미환급금 1분 통합 안내 센터
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-slate-700">
          <Link href="/smartchoice/" className="hover:text-blue-600 transition-colors py-1">
            스마트초이스 1분조회
          </Link>
          <Link href="/telecom-guide/" className="hover:text-blue-600 transition-colors py-1">
            통신3사/알뜰폰
          </Link>
          <Link href="/discounts/" className="hover:text-blue-600 transition-colors py-1">
            요금감면 혜택
          </Link>
          <Link href="/calculator/" className="hover:text-blue-600 transition-colors py-1">
            환급금 자동계산기
          </Link>
          <Link href="/faq/" className="hover:text-blue-600 transition-colors py-1">
            자주묻는질문
          </Link>
        </nav>

        {/* Desktop Main CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={TARGET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-95"
          >
            <Search className="w-4 h-4 text-cyan-300" />
            <span>미환급금 1분 조회하기 ↗</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="메뉴 열기"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 animate-in slide-in-from-top-2">
          <a
            href={TARGET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold rounded-xl text-center flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 text-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>내 미환급금 1분 즉시 조회 ↗</span>
          </a>

          <div className="divide-y divide-slate-100 text-sm font-bold text-slate-800 pt-2">
            <Link
              href="/smartchoice/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 hover:text-blue-600"
            >
              스마트초이스 1분 통합조회 안내
            </Link>
            <Link
              href="/telecom-guide/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 hover:text-blue-600"
            >
              SKT / KT / LGU+ / 알뜰폰 안내
            </Link>
            <Link
              href="/discounts/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 hover:text-blue-600"
            >
              통신비 복지 요금 감면 (월 최대 33,500원)
            </Link>
            <Link
              href="/calculator/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 hover:text-blue-600"
            >
              예상 미환급금 3초 자동 계산기
            </Link>
            <Link
              href="/faq/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 hover:text-blue-600"
            >
              자주 묻는 질문 (FAQ)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
