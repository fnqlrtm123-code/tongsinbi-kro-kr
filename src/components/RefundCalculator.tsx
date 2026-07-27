'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function RefundCalculator() {
  const [telecom, setTelecom] = useState('skt');
  const [cancelCount, setCancelCount] = useState(1);
  const [hasDeposit, setHasDeposit] = useState(true);
  const [doublePayMonths, setDoublePayMonths] = useState(1);

  // Estimation math
  const estimatedDoublePay = doublePayMonths * 35000;
  const estimatedDeposit = hasDeposit ? 20000 : 0;
  const estimatedCancelFeeRefund = cancelCount * 15000;
  const totalEstimatedRefund = estimatedDoublePay + estimatedDeposit + estimatedCancelFeeRefund;

  return (
    <div className="border border-gray-300 rounded-lg p-5 sm:p-6 bg-white space-y-6">
      <div className="flex items-center gap-2 border-b border-gray-200 pb-3">
        <Calculator className="w-5 h-5 text-black" />
        <h3 className="text-lg font-bold text-gray-900">통신비 미환급금 3초 예상 조회 계산기</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Options */}
        <div className="space-y-4 text-sm">
          <div>
            <label className="block font-bold text-gray-800 mb-1">
              이용 중이거나 해지했던 주요 통신사
            </label>
            <select
              value={telecom}
              onChange={(e) => setTelecom(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:border-black"
            >
              <option value="skt">SK텔레콤 (SKT)</option>
              <option value="kt">KT (케이티)</option>
              <option value="lgu">LG유플러스 (LGU+)</option>
              <option value="mvno">알뜰폰 (KCT, 헬로모바일 등)</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-gray-800 mb-1">
              최근 5년간 통신사 번호이동 / 해지 횟수
            </label>
            <select
              value={cancelCount}
              onChange={(e) => setCancelCount(Number(e.target.value))}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:border-black"
            >
              <option value={0}>없음 (0회)</option>
              <option value={1}>1회 해지/변경</option>
              <option value={2}>2회 해지/변경</option>
              <option value={3}>3회 이상 해지/변경</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-gray-800 mb-1">
              이중 자동이체 출금 또는 정산 지연 경험
            </label>
            <div className="flex gap-2">
              {[0, 1, 2, 3].map((months) => (
                <button
                  key={months}
                  onClick={() => setDoublePayMonths(months)}
                  className={`flex-1 text-xs py-2 rounded border font-semibold ${
                    doublePayMonths === months
                      ? 'bg-black text-white border-black'
                      : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {months === 0 ? '없음' : `${months}회 의심`}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-bold text-gray-800 mb-1">
              과거 무선단말기 보증금 / 단말기 보증보험 가입 여부
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setHasDeposit(true)}
                className={`flex-1 text-xs py-2 rounded border font-semibold ${
                  hasDeposit
                    ? 'bg-black text-white border-black'
                    : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
              >
                가입/보증금 납부 경험 있음
              </button>
              <button
                onClick={() => setHasDeposit(false)}
                className={`flex-1 text-xs py-2 rounded border font-semibold ${
                  !hasDeposit
                    ? 'bg-black text-white border-black'
                    : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
              >
                없음 / 잘 모름
              </button>
            </div>
          </div>
        </div>

        {/* Calculation Result */}
        <div className="bg-gray-50 border border-gray-200 rounded p-4 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm border-b border-gray-200 pb-2">
              <span className="font-bold text-gray-700">미환급금 발생 가능성</span>
              <span className="font-bold px-2 py-0.5 rounded text-xs bg-black text-white flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                환급 가능성 높음
              </span>
            </div>

            <div className="space-y-1.5 text-sm text-gray-700">
              <div className="flex justify-between text-xs">
                <span>이중납부 과오납 추정액:</span>
                <span className="font-semibold">{estimatedDoublePay.toLocaleString()} 원</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>단말기 보증금 미반환 추정액:</span>
                <span className="font-semibold">{estimatedDeposit.toLocaleString()} 원</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>해지 후 정산 미완료 추정액:</span>
                <span className="font-semibold">{estimatedCancelFeeRefund.toLocaleString()} 원</span>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-300 flex justify-between items-baseline">
              <span className="font-bold text-gray-900 text-base">예상 총 미환급금:</span>
              <span className="text-2xl font-black text-black">
                {totalEstimatedRefund.toLocaleString()} <span className="text-sm font-normal">원</span>
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <a
              href="https://www.smartchoice.or.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-black text-white font-bold rounded text-xs sm:text-sm text-center block hover:bg-gray-800 transition-colors shadow-sm"
            >
              스마트초이스에서 실제 미환급금 1분 조회하기 ↗
            </a>
            <p className="text-[11px] text-gray-500 text-center flex items-center justify-center gap-1">
              <AlertCircle className="w-3 h-3 text-gray-400" />
              실제 환급금은 5년 시효 내 스마트초이스 공식 본인인증 후 즉시 계좌로 입금됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
