'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, PhoneCall, ShieldCheck } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-gray-900 py-1.5 px-4 text-xs text-white">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
            <span>방송통신위원회 미환급금 통합 조회 공식 가이드 포털</span>
          </div>
          <div className="flex gap-4 font-semibold text-gray-300">
            <a href="https://www.smartchoice.or.kr" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
              스마트초이스 바로가기 ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-5xl mx-auto px-4 h-14 flex justify-between items-center">
        <Link href="/" className="font-extrabold text-gray-900 text-base sm:text-lg tracking-tight flex items-center gap-2">
          <span className="bg-black text-white px-2 py-0.5 rounded text-xs">kro.kr</span>
          통신비미환급금조회 <span className="font-normal text-xs text-gray-500 hidden sm:inline">센터</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-gray-700">
          <Link href="/smartchoice/" className="hover:text-black hover:underline py-1">
            스마트초이스 조회
          </Link>
          <Link href="/telecom-guide/" className="hover:text-black hover:underline py-1">
            3대 통신사 안내
          </Link>
          <Link href="/discounts/" className="hover:text-black hover:underline py-1">
            요금감면 혜택
          </Link>
          <Link href="/calculator/" className="hover:text-black hover:underline py-1">
            예상 환급금 계산기
          </Link>
          <Link href="/faq/" className="hover:text-black hover:underline py-1">
            자주 묻는 질문
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-black"
          aria-label="메뉴"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-3 text-sm">
          <Link
            href="/smartchoice/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-800 font-semibold border-b border-gray-100"
          >
            스마트초이스 1분 통합조회
          </Link>
          <Link
            href="/telecom-guide/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-800 font-semibold border-b border-gray-100"
          >
            SKT / KT / LGU+ / 알뜰폰 안내
          </Link>
          <Link
            href="/discounts/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-800 font-semibold border-b border-gray-100"
          >
            통신비 복지 요금 감면
          </Link>
          <Link
            href="/calculator/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-800 font-semibold border-b border-gray-100"
          >
            예상 환급금 자동 계산기
          </Link>
          <Link
            href="/faq/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-800 font-semibold"
          >
            자주 묻는 질문 (FAQ)
          </Link>
        </div>
      )}
    </header>
  );
}
