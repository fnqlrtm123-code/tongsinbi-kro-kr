import React from 'react';
import Link from 'next/link';
import RefundCalculator from '@/components/RefundCalculator';
import SmartChoiceGuide from '@/components/SmartChoiceGuide';
import TelecomGuide from '@/components/TelecomGuide';
import DiscountsGuide from '@/components/DiscountsGuide';
import FaqSection from '@/components/FaqSection';
import { Sparkles, ArrowRight, ShieldCheck, CreditCard, Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-10 text-gray-900">
      {/* Hero Banner Section */}
      <div className="border-b border-gray-300 pb-6 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white rounded-full text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          <span>kro.kr 네이버 웹문서 상위 노출 최적화 포털</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
          통신비 미환급금 통합 조회 및 신청 가이드
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
          SKT, KT, LG유플러스 및 알뜰폰 해지 후 이중 납부된 요금, 미반환 단말기 보증금, 과오납금을 스마트초이스(SmartChoice)를 통해 1분 만에 일괄 조회하고 본인 계좌로 환급받으세요.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="https://www.smartchoice.or.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-black text-white font-bold rounded text-xs sm:text-sm hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-sm"
          >
            <Search className="w-4 h-4" />
            <span>스마트초이스에서 미환급금 1분 조회하기 ↗</span>
          </a>
          <Link
            href="/calculator/"
            className="px-5 py-3 bg-gray-100 text-gray-900 font-bold border border-gray-300 rounded text-xs sm:text-sm hover:bg-gray-200 transition-colors flex items-center gap-1.5"
          >
            <span>예상 환급금 3초 계산해보기</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Link
          href="/smartchoice/"
          className="border border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors block bg-white"
        >
          <strong className="block text-sm text-gray-900 mb-1">스마트초이스 조회</strong>
          <span className="text-xs text-gray-500">방통위 공식 1분 신청</span>
        </Link>
        <Link
          href="/telecom-guide/"
          className="border border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors block bg-white"
        >
          <strong className="block text-sm text-gray-900 mb-1">3대 통신사 안내</strong>
          <span className="text-xs text-gray-500">SKT / KT / LGU+</span>
        </Link>
        <Link
          href="/discounts/"
          className="border border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors block bg-white"
        >
          <strong className="block text-sm text-gray-900 mb-1">요금감면 혜택</strong>
          <span className="text-xs text-gray-500">월 최대 33,500원 할인</span>
        </Link>
        <Link
          href="/calculator/"
          className="border border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors block bg-white"
        >
          <strong className="block text-sm text-gray-900 mb-1">환급금 계산기</strong>
          <span className="text-xs text-gray-500">예상 미환급액 자동계산</span>
        </Link>
      </div>

      {/* Calculator Component */}
      <RefundCalculator />

      {/* SmartChoice 4-Step Guide */}
      <SmartChoiceGuide />

      {/* Telecom Specific Guides */}
      <TelecomGuide />

      {/* Welfare Discounts Guide */}
      <DiscountsGuide />

      {/* FAQ Section */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900">자주 묻는 질문 (FAQ)</h2>
          <Link href="/faq/" className="text-xs text-gray-600 underline font-semibold">
            전체보기 →
          </Link>
        </div>
        <FaqSection limit={5} />
      </div>
    </div>
  );
}
