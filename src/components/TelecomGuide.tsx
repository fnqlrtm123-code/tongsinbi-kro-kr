'use client';

import React from 'react';
import { telecomList } from '@/data/telecomData';
import { Phone, Globe } from 'lucide-react';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export default function TelecomGuide() {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
      <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            통신 4사(SKT, KT, LGU+, 알뜰폰) 미환급금 통합 가이드
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            각 통신사별 과오납 발생 원인과 고객센터 문의 방법 및 1분 통합 조회 방법을 제공합니다.
          </p>
        </div>

        <a
          href={TARGET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-lg transition-all shadow-sm shrink-0"
        >
          <span>전체 통신사 1분 일괄조회 ↗</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {telecomList.map((item) => (
          <div
            key={item.id}
            className="border border-slate-200 rounded-xl p-5 bg-slate-50 hover:bg-white hover:border-blue-300 transition-all space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-600 text-white">
                    {item.category}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-base">{item.name}</h3>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-700">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-bold text-slate-900">고객센터:</span> {item.callCenter}
                </p>
                <p className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-bold text-slate-900">조회 메뉴:</span> {item.inquiryMethod}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <p className="text-[11px] font-bold text-slate-700 mb-1.5">주요 환급 발생 사유:</p>
                <div className="flex flex-wrap gap-1">
                  {item.refundTypes.map((type, idx) => (
                    <span
                      key={idx}
                      className="bg-white border border-slate-200 text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={TARGET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg text-center flex items-center justify-center gap-1 shadow-sm transition-colors"
            >
              <span>{item.name} 미환급금 즉시 조회 ↗</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
