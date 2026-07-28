import React from 'react';
import Link from 'next/link';
import RefundCalculator from '@/components/RefundCalculator';
import SmartChoiceGuide from '@/components/SmartChoiceGuide';
import TelecomGuide from '@/components/TelecomGuide';
import DiscountsGuide from '@/components/DiscountsGuide';
import FaqSection from '@/components/FaqSection';
import FloatingMobileCta from '@/components/FloatingMobileCta';
import {
  Sparkles,
  Search,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Award,
  Zap,
  TrendingUp,
  FileText,
  Clock,
  Banknote,
  Users,
  Smartphone,
  ChevronRight
} from 'lucide-react';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans pb-16 lg:pb-0 space-y-10 sm:space-y-14">
      {/* 1. Hero Section (Super Direct & Intuitive Header Banner) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 pt-8 sm:pt-12 pb-14 px-4 border-b border-indigo-950/60">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-blue-600/20 rounded-full blur-[110px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto space-y-6 text-center relative z-10">
          {/* Live Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/80 border border-blue-400/30 text-blue-200 text-xs font-black shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
            <span>2026년 방송통신위원회 미환급금 1분 통합 조회 포털</span>
            <span className="bg-emerald-500 text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded">
              즉시신청
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              숨은 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-300">통신비 미환급금</span>
              <br />
              1분 만에 찾아서 환급받으세요
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
              SKT · KT · LGU+ · 알뜰폰 해지 후 이중 출금 요금, 미반환 단말기 보증금을
              <br className="hidden sm:inline" />
              <strong>5년 소멸시효 전 본인 계좌로 즉시 환급</strong> 받을 수 있습니다.
            </p>
          </div>

          {/* Huge Main Direct CTA Button */}
          <div className="pt-2 max-w-md mx-auto">
            <a
              href={TARGET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 sm:py-5 px-8 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-600 hover:from-blue-600 hover:to-indigo-700 text-white font-black text-base sm:text-xl rounded-2xl shadow-2xl shadow-blue-500/40 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 animate-pulse-glow"
            >
              <Search className="w-6 h-6 text-cyan-300" />
              <span>🔥 내 미환급금 1분 즉시 조회하기 ↗</span>
            </a>
            <p className="text-[11px] text-slate-400 mt-2 font-bold flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              정부 공공 100% 무료 서비스 | 본인명의 계좌 바로 입금
            </p>
          </div>

          {/* Trust Highlights Grid */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-3xl mx-auto text-slate-300 text-xs font-extrabold">
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>1분 간편 조회</span>
            </div>
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 flex items-center justify-center gap-2">
              <Banknote className="w-4 h-4 text-emerald-400" />
              <span>평균 5.4만원 환급</span>
            </div>
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>5년 시효 내 필수</span>
            </div>
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>안전 본인인증</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Single Page Container */}
      <div className="max-w-4xl mx-auto px-4 space-y-10 sm:space-y-14">
        {/* 2. Direct 3-Step Process Banner */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="text-center space-y-1">
            <span className="text-xs font-black text-blue-400 uppercase tracking-wider">Simple 3 Steps</span>
            <h2 className="text-xl sm:text-2xl font-black text-white">미환급금 신청 3단계 절차</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-950 border border-slate-800/80 rounded-2xl p-5 text-center space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-600/30 text-blue-400 font-black text-sm inline-flex items-center justify-center">
                1
              </span>
              <h3 className="font-extrabold text-white text-base">본인 인증</h3>
              <p className="text-xs text-slate-400">네이버 / 카카오 / PASS 간편 인증으로 10초 완료</p>
            </div>

            <div className="bg-slate-950 border border-slate-800/80 rounded-2xl p-5 text-center space-y-2">
              <span className="w-8 h-8 rounded-full bg-indigo-600/30 text-indigo-400 font-black text-sm inline-flex items-center justify-center">
                2
              </span>
              <h3 className="font-extrabold text-white text-base">미환급액 확인</h3>
              <p className="text-xs text-slate-400">SKT, KT, LGU+, 알뜰폰 숨은 과오납금 일괄 조회</p>
            </div>

            <div className="bg-slate-950 border border-slate-800/80 rounded-2xl p-5 text-center space-y-2">
              <span className="w-8 h-8 rounded-full bg-emerald-600/30 text-emerald-400 font-black text-sm inline-flex items-center justify-center">
                3
              </span>
              <h3 className="font-extrabold text-white text-base">계좌 입금</h3>
              <p className="text-xs text-slate-400">본인 명의 입금 계좌 등록 시 1~2일 내 즉시 입금</p>
            </div>
          </div>

          <a
            href={TARGET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-sm sm:text-base rounded-xl text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-transform active:scale-95"
          >
            <span>지금 1분 만에 미환급금 조회하기 ↗</span>
          </a>
        </section>

        {/* 3. Interactive Refund Calculator Widget */}
        <section id="calculator">
          <RefundCalculator />
        </section>

        {/* 4. SmartChoice Step-by-Step Guide */}
        <section id="guide">
          <SmartChoiceGuide />
        </section>

        {/* 5. Telecom 4 Carriers Grid */}
        <section id="telecoms">
          <TelecomGuide />
        </section>

        {/* 6. Welfare Discount Guide */}
        <section id="discounts">
          <DiscountsGuide />
        </section>

        {/* 7. FAQ Accordion Section */}
        <section id="faq" className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-400" />
            통신비 미환급금 자주 묻는 질문 (FAQ)
          </h2>
          <FaqSection limit={5} />
        </section>

        {/* 8. Deep Informational Article (SEO for Naver Search Advisor & Bing) */}
        <article className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed shadow-lg">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-lg sm:text-xl font-black text-white">
              통신비 미환급금 통합 조회 상세 가이드 & 상법상 5년 소멸시효 규정
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              네이버웹문서 및 빙 검색 노출 기준 공식 안내 정보
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
              1. 미환급 통신비란?
            </h3>
            <p>
              SK텔레콤(SKT), KT, LG유플러스(LGU+) 및 알뜰폰 이용자가 서비스를 해지하거나 타 통신사로 번호이동을 한 후, 정산 과정에서 발생한 과오납금(요금 이중 납부, 요금 이중 출금)이나 단말기 보증금, 설비보증금 등이 고객에게 반환되지 않고 통신사 계좌에 남아있는 금액입니다.
            </p>

            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
              2. 미환급금이 발생하는 이유
            </h3>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
              <li><strong>이중 자동이체 출금:</strong> 번호이동 후 이전 통신사의 자동이체 해지가 지연되어 추가로 출금된 경우</li>
              <li><strong>단말기 보증금 미반환:</strong> 무선 단말기 구매 시 납부했던 보증금이나 보증보험료 환급 미수령</li>
              <li><strong>해지 후 요금 과오납:</strong> 해지 당월 요금 정산 시 할인이 사후 적용되어 발생한 소액 환급금</li>
            </ul>

            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              3. 5년 소멸시효 주의사항
            </h3>
            <p>
              통신 채권의 상법상 소멸시효는 <strong>발생일로부터 5년</strong>입니다. 5년이 지나면 법적으로 통신사 수익으로 귀속될 수 있으므로, 과거 5년 이내 통신사를 해지하거나 변경한 적이 있다면 지금 즉시 조회해보셔야 합니다.
            </p>
          </div>

          {/* High Impact Direct CTA Banner inside Article */}
          <div className="bg-gradient-to-r from-blue-950 to-indigo-950 border border-blue-500/30 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="space-y-1 text-center sm:text-left">
              <strong className="text-white text-base block font-black">내 잊혀진 통신비 미환급금 1분 조회</strong>
              <span className="text-xs text-slate-300">방송통신위원회 공식 본인인증으로 즉시 입금 신청 가능</span>
            </div>
            <a
              href={TARGET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-lg shrink-0 transition-transform hover:scale-105"
            >
              미환급금 1분 조회하기 ↗
            </a>
          </div>
        </article>
      </div>

      {/* Floating Mobile Bottom Sticky CTA Bar */}
      <FloatingMobileCta />
    </div>
  );
}
