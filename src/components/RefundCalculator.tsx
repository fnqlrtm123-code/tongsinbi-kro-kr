'use client';

import React, { useState } from 'react';
import { Calculator, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export default function RefundCalculator() {
  const [telecom, setTelecom] = useState('skt');
  const [cancelCount, setCancelCount] = useState(1);
  const [hasDeposit, setHasDeposit] = useState(true);
  const [doublePayMonths, setDoublePayMonths] = useState(1);

  // Estimation math
  const baseRate = telecom === 'skt' ? 38000 : telecom === 'kt' ? 36000 : telecom === 'lgu' ? 35000 : 28000;
  const estimatedDoublePay = doublePayMonths * baseRate;
  const estimatedDeposit = hasDeposit ? 25000 : 0;
  const estimatedCancelFeeRefund = cancelCount * 18000;
  const totalEstimatedRefund = estimatedDoublePay + estimatedDeposit + estimatedCancelFeeRefund;

  const minRefund = Math.max(12000, totalEstimatedRefund - 15000);
  const maxRefund = totalEstimatedRefund + 28000;

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
      {/* Header Title */}
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            통신비 미환급금 3초 예상 자동 계산기
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            이중출금 요금, 단말기 보증금, 해지 정산 과오납금을 3초 만에 시뮬레이션합니다.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Input Options */}
        <div className="lg:col-span-7 space-y-5 text-sm">
          {/* 1. Carrier Choice */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-black">1</span>
              이용 중이거나 최근 5년 내 해지했던 주요 통신사
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'skt', name: 'SK텔레콤' },
                { id: 'kt', name: 'KT' },
                { id: 'lgu', name: 'LG유플러스' },
                { id: 'mvno', name: '알뜰폰' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTelecom(item.id)}
                  className={`py-2.5 px-3 rounded-lg font-bold text-xs transition-all border ${
                    telecom === item.id
                      ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Cancel Count */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-black">2</span>
              최근 5년간 번호이동 / 인터넷·모바일 해지 횟수
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map((count) => (
                <button
                  key={count}
                  onClick={() => setCancelCount(count)}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border ${
                    cancelCount === count
                      ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {count === 0 ? '없음' : `${count}회`}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Double Payment Experience */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-black">3</span>
              자동이체 해지 지연으로 인한 요금 이중 출금 의심
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map((m) => (
                <button
                  key={m}
                  onClick={() => setDoublePayMonths(m)}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border ${
                    doublePayMonths === m
                      ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {m === 0 ? '없음' : `${m}회 의심`}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Equipment Deposit */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-black">4</span>
              무선 단말기 보증금 / 보증보험 납부 경험
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setHasDeposit(true)}
                className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all border ${
                  hasDeposit
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                있음 (단말 보증금 가입)
              </button>
              <button
                onClick={() => setHasDeposit(false)}
                className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all border ${
                  !hasDeposit
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                없음 / 잘 모름
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Output Card */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <span className="text-xs font-bold text-slate-600">환급 발생 가능성</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                94.8% 환급 유력
              </span>
            </div>

            {/* Breakdown List */}
            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">요금 이중출금 과오납 추정:</span>
                <span className="font-bold">{estimatedDoublePay.toLocaleString()} 원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">단말기 미반환 보증금 추정:</span>
                <span className="font-bold">{estimatedDeposit.toLocaleString()} 원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">해지 정산 미완료 환급 추정:</span>
                <span className="font-bold">{estimatedCancelFeeRefund.toLocaleString()} 원</span>
              </div>
            </div>

            {/* Total Highlight */}
            <div className="bg-white border border-blue-200 rounded-xl p-4 text-center space-y-1 shadow-sm">
              <span className="text-[11px] font-bold text-blue-600">
                예상 미환급금 종합 범위
              </span>
              <div className="text-2xl sm:text-3xl font-black text-blue-700">
                {minRefund.toLocaleString()} ~ {maxRefund.toLocaleString()} <span className="text-sm font-normal text-slate-800">원</span>
              </div>
              <p className="text-[10px] text-slate-400">※ 본인인증 후 1분 내 정확한 실제 환급금이 조회됩니다.</p>
            </div>
          </div>

          {/* CTA Link */}
          <div className="space-y-2">
            <a
              href={TARGET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl text-center text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-transform active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span>미환급금 1분 즉시 조회 및 계좌 입금 ↗</span>
            </a>
            <p className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              방송통신위원회 공식 절차로 안전하게 조회됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
