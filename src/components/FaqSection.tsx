'use client';

import React, { useState } from 'react';
import { faqList } from '@/data/telecomData';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export default function FaqSection({ limit }: { limit?: number }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const items = limit ? faqList.slice(0, limit) : faqList;

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden divide-y divide-slate-100">
        {items.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="text-sm">
              <button
                onClick={() => toggle(idx)}
                className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 flex justify-between items-center hover:bg-blue-50/50 transition-colors gap-3"
              >
                <span className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-blue-100 text-blue-700 font-black text-xs flex items-center justify-center shrink-0">
                    Q
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-slate-900">{item.question}</span>
                </span>
                <span className="text-slate-400 text-xs font-semibold shrink-0">
                  {isOpen ? (
                    <span className="flex items-center gap-1 text-blue-600">닫기 ▲</span>
                  ) : (
                    <span className="flex items-center gap-1">열기 ▼</span>
                  )}
                </span>
              </button>
              {isOpen && (
                <div className="p-5 pt-0 text-slate-700 leading-relaxed bg-slate-50/80 border-t border-slate-100 whitespace-pre-line text-xs sm:text-sm">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Banner inside FAQ */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-md">
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-xs font-extrabold text-cyan-300">소멸시효 5년 지나기 전에 즉시 확인하세요</p>
          <h4 className="text-base sm:text-lg font-black">내 통신비 미환급금 1분 만에 찾아가기</h4>
        </div>
        <a
          href={TARGET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-transform hover:scale-105 shrink-0 shadow-lg shadow-emerald-500/20 flex items-center gap-1.5"
        >
          <Sparkles className="w-4 h-4" />
          <span>미환급금 1분 조회하기 ↗</span>
        </a>
      </div>
    </div>
  );
}
