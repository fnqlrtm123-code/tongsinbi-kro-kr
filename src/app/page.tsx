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
  Users
} from 'lucide-react';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export default function Home() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 font-sans pb-16 lg:pb-0 space-y-12 sm:space-y-16">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 pt-10 pb-16 px-4 border-b border-indigo-950">
        {/* Ambient Blur FX */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto space-y-8 relative z-10 text-center sm:text-left">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-900/80 to-indigo-900/80 border border-blue-500/30 text-blue-300 text-xs font-bold shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
            <span>방송통신위원회 통신비 미환급금 1분 통합 조회 포털</span>
            <span className="bg-emerald-500 text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded-md ml-1">
              LIVE
            </span>
          </div>

          {/* Main Hero Headline */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight sm:leading-none tracking-tight">
              숨은 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">통신비 미환급금</span>
              <br />
              1분 만에 찾아서 환급받으세요
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-medium max-w-3xl">
              SKT, KT, LG유플러스 및 알뜰폰 해지 후 이중 출금된 요금, 단말기 미반환 보증금, 과오납금을 
              <strong> 5년 소멸시효 전 본인 계좌로 즉시 환급</strong> 신청할 수 있습니다.
            </p>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              href={TARGET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-600 hover:from-blue-600 hover:to-indigo-700 text-white font-black text-base sm:text-lg rounded-2xl shadow-xl shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 animate-pulse-glow"
            >
              <Search className="w-5 h-5 text-cyan-300" />
              <span>미환급금 1분 즉시 조회하기 ↗</span>
            </a>

            <Link
              href="/calculator/"
              className="px-6 py-4 bg-slate-800/90 hover:bg-slate-800 text-slate-200 font-extrabold text-sm sm:text-base rounded-2xl border border-slate-700/80 transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <span>예상 환급금 3초 계산하기</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </Link>
          </div>

          {/* Trust Badges Bar */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-slate-300 text-xs font-bold border-t border-slate-800/80">
            <div className="flex items-center justify-center sm:justify-start gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% 무료 공공안내</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>1분 이내 즉시 조회</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
              <Banknote className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>본인 명의 계좌 입금</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
              <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>5년 시효 내 신청 필수</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 space-y-12 sm:space-y-16">
        {/* 2. Quick Feature Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <a
            href={TARGET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 sm:p-5 text-center hover:bg-slate-800 hover:border-blue-500/50 transition-all block group shadow-md"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Search className="w-5 h-5" />
            </div>
            <strong className="block text-sm sm:text-base text-white font-black">스마트초이스</strong>
            <span className="text-xs text-slate-400 mt-1 block">1분 통합조회 ↗</span>
          </a>

          <a
            href={TARGET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 sm:p-5 text-center hover:bg-slate-800 hover:border-indigo-500/50 transition-all block group shadow-md"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
            <strong className="block text-sm sm:text-base text-white font-black">통신 3사/알뜰폰</strong>
            <span className="text-xs text-slate-400 mt-1 block">개별 과오납 가이드 ↗</span>
          </a>

          <a
            href={TARGET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 sm:p-5 text-center hover:bg-slate-800 hover:border-emerald-500/50 transition-all block group shadow-md"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <strong className="block text-sm sm:text-base text-white font-black">요금감면 혜택</strong>
            <span className="text-xs text-slate-400 mt-1 block">월 최대 33,500원 ↗</span>
          </a>

          <Link
            href="/calculator/"
            className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 sm:p-5 text-center hover:bg-slate-800 hover:border-amber-500/50 transition-all block group shadow-md"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <strong className="block text-sm sm:text-base text-white font-black">환급 계산기</strong>
            <span className="text-xs text-slate-400 mt-1 block">예상 환급액 계산</span>
          </Link>
        </section>

        {/* 3. Interactive Refund Calculator Component */}
        <section id="calculator-section">
          <RefundCalculator />
        </section>

        {/* 4. SmartChoice Guide Component */}
        <section id="smartchoice-section">
          <SmartChoiceGuide />
        </section>

        {/* 5. Telecom Carrier Guide Component */}
        <section id="telecom-section">
          <TelecomGuide />
        </section>

        {/* 6. Welfare Discounts Guide Component */}
        <section id="discounts-section">
          <DiscountsGuide />
        </section>

        {/* 7. FAQ Section Component */}
        <section id="faq-section" className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-blue-400" />
              통신비 미환급금 자주 묻는 질문 (FAQ)
            </h2>
            <Link href="/faq/" className="text-xs font-bold text-blue-400 hover:underline">
              전체 보기 →
            </Link>
          </div>
          <FaqSection limit={5} />
        </section>

        {/* 8. Deep Rich SEO Content Section (Targeting Naver Webmaster & Bing SEO) */}
        <article className="bg-slate-800/60 border border-slate-700/80 rounded-3xl p-6 sm:p-8 space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed shadow-lg">
          <div className="border-b border-slate-700 pb-4">
            <h2 className="text-lg sm:text-xl font-black text-white">
              통신비 미환급금 종합 안내: 정의, 발생 원인 및 5년 소멸시효 규정
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              네이버웹문서 및 빙 웹마스터 가이드 기준 공식 정리 정보
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              1. 통신비 미환급금이란 무엇인가요?
            </h3>
            <p>
              통신비 미환급금은 이동전화(SKT, KT, LGU+, 알뜰폰), 초고속 인터넷, IPTV 등의 통신 서비스를 해지하는 과정에서 요금이 중복 납부되거나, 단말기 보증금 및 설비 보증금이 정산되지 않은 채 통신사 계좌에 남아있는 미반환 금액을 말합니다.
            </p>

            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              2. 통신비 미환급금이 발생하는 주요 이유 3가지
            </h3>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
              <li>
                <strong>자동이체 이중출금:</strong> 통신사를 번호이동하거나 해지했음에도 은행 자동이체 해지가 지연되어 다음 달 요금이 추가로 빠져나간 경우
              </li>
              <li>
                <strong>단말기 보증금 미반환:</strong> 과거 2G/3G 휴대폰 가입 시 납부했던 무선 단말 보증금이나 보증보험 정산 환급금이 남아있는 경우
              </li>
              <li>
                <strong>요금 과오납 및 할인 미지급:</strong> 해지 당월 할인이 사후 적용되거나 요금 정산 오차로 인한 소액 과오납금
              </li>
            </ul>

            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              3. 상법상 5년 소멸시효 주의사항
            </h3>
            <p>
              통신 채권의 상법상 소멸시효는 <strong>발생일로부터 5년</strong>입니다. 5년이 경과하면 법적으로 통신사 수익으로 귀속될 수 있으므로, 과거 5년 이내 통신사 변경 또는 해지 경험이 있다면 지금 즉시 조회해 보셔야 합니다.
            </p>
          </div>

          {/* Inline CTA Box inside Article */}
          <div className="bg-gradient-to-r from-blue-900/60 to-indigo-900/60 border border-blue-500/30 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
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

      {/* Floating Mobile Bottom CTA Bar */}
      <FloatingMobileCta />
    </div>
  );
}
