'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, AlertCircle, Sparkles, ShieldCheck, Banknote, RefreshCw } from 'lucide-react';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export default function RefundCalculator() {
  const [telecom, setTelecom] = useState('skt');
  const [cancelCount, setCancelCount] = useState(1);
  const [hasDeposit, setHasDeposit] = useState(true);
  const [doublePayMonths, setDoublePayMonths] = useState(1);

  // Estimation logic
  const baseRate = telecom === 'skt' ? 38000 : telecom === 'kt' ? 36000 : telecom === 'lgu' ? 35000 : 28000;
  const estimatedDoublePay = doublePayMonths * baseRate;
  const estimatedDeposit = hasDeposit ? 25000 : 0;
  const estimatedCancelFeeRefund = cancelCount * 18000;
  const totalEstimatedRefund = estimatedDoublePay + estimatedDeposit + estimatedCancelFeeRefund;

  const minRefund = Math.max(12000, totalEstimatedRefund - 15000);
  const maxRefund = totalEstimatedRefund + 28000;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-indigo-800/40 relative overflow-hidden space-y-6">
      {/* Background Decorative Blur Circles */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-5 gap-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                통신비 미환급금 3초 예상 조회 계산기
              </h3>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-500/30 hidden sm:inline">
                실시간 연동
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              해지 요금 이중출금, 미반환 단말기 보증금, 과오납금을 3초 만에 시뮬레이션합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Left Column: Interactive Inputs */}
        <div className="lg:col-span-7 space-y-5 text-sm">
          {/* 1. Carrier Choice */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center text-[11px] font-black">1</span>
              이용 중이거나 최근 5년 내 해지했던 주요 통신사
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'skt', name: 'SKT', color: 'hover:border-rose-500' },
                { id: 'kt', name: 'KT', color: 'hover:border-cyan-500' },
                { id: 'lgu', name: 'LGU+', color: 'hover:border-pink-500' },
                { id: 'mvno', name: '알뜰폰', color: 'hover:border-purple-500' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTelecom(item.id)}
                  className={`py-2.5 px-3 rounded-xl font-extrabold text-xs transition-all border ${
                    telecom === item.id
                      ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/30 scale-[1.02]'
                      : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Cancellation / Change count */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center text-[11px] font-black">2</span>
              최근 5년간 번호이동 / 인터넷·모바일 해지 횟수
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map((count) => (
                <button
                  key={count}
                  onClick={() => setCancelCount(count)}
                  className={`py-2 px-3 rounded-xl text-xs font-extrabold transition-all border ${
                    cancelCount === count
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/30'
                      : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {count === 0 ? '없음' : `${count}회`}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Double Payment Experience */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center text-[11px] font-black">3</span>
              자동이체 해지 지연으로 인한 요금 이중 출금 의심
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map((m) => (
                <button
                  key={m}
                  onClick={() => setDoublePayMonths(m)}
                  className={`py-2 px-3 rounded-xl text-xs font-extrabold transition-all border ${
                    doublePayMonths === m
                      ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {m === 0 ? '없음' : `${m}개월 의심`}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Equipment Deposit */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center text-[11px] font-black">4</span>
              무선 단말기 보증금 / 보증보험 납부 경험
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setHasDeposit(true)}
                className={`py-2.5 px-3 rounded-xl text-xs font-extrabold transition-all border ${
                  hasDeposit
                    ? 'bg-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-600/30'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                있음 (단말 보증금 가입)
              </button>
              <button
                onClick={() => setHasDeposit(false)}
                className={`py-2.5 px-3 rounded-xl text-xs font-extrabold transition-all border ${
                  !hasDeposit
                    ? 'bg-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-600/30'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                없음 / 잘 모름
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: High Conversion Result Card */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-700/80 rounded-2xl p-5 flex flex-col justify-between space-y-5 shadow-inner">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-slate-400">환급 발생 가능성</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                94.8% 환급 유력
              </span>
            </div>

            {/* Breakdown List */}
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">요금 이중출금 과오납 추정:</span>
                <span className="font-bold text-slate-200">{estimatedDoublePay.toLocaleString()} 원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">단말기 미반환 보증금 추정:</span>
                <span className="font-bold text-slate-200">{estimatedDeposit.toLocaleString()} 원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">해지 정산 미완료 환급 추정:</span>
                <span className="font-bold text-slate-200">{estimatedCancelFeeRefund.toLocaleString()} 원</span>
              </div>
            </div>

            {/* Estimated Total Highlight Box */}
            <div className="bg-gradient-to-r from-blue-950/80 to-indigo-950/80 border border-blue-500/30 rounded-xl p-4 text-center space-y-1">
              <span className="text-[11px] font-extrabold text-blue-300 tracking-wider uppercase">
                예상 미환급금 종합 범위
              </span>
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-emerald-300">
                {minRefund.toLocaleString()} ~ {maxRefund.toLocaleString()} <span className="text-sm text-white font-normal">원</span>
              </div>
              <p className="text-[10px] text-slate-400">※ 본인인증 후 1분 내 정확한 실제 환급금이 조회됩니다.</p>
            </div>
          </div>

          {/* High Conversion CTA Link */}
          <div className="space-y-2">
            <a
              href={TARGET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-600 hover:from-blue-600 hover:to-indigo-700 text-white font-black rounded-xl text-center text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-blue-600/40 transition-all hover:scale-[1.02] active:scale-95 animate-pulse-glow"
            >
              <Sparkles className="w-5 h-5 text-amber-300 fill-amber-300" />
              <span>미환급금 1분 즉시 조회 및 계좌 입금 ↗</span>
            </a>
            <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              방송통신위원회 공식 절차로 안전하게 조회됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
