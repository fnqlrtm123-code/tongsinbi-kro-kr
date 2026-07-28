'use client';

import React, { useState } from 'react';
import { faqList } from '@/data/telecomData';

export default function FaqSection({ limit }: { limit?: number }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const items = limit ? faqList.slice(0, limit) : faqList;

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden divide-y divide-slate-100">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={idx} className="text-sm">
            <button
              onClick={() => toggle(idx)}
              className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 flex justify-between items-center hover:bg-slate-50 transition-colors gap-3"
            >
              <span className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-md bg-blue-100 text-blue-700 font-black text-xs flex items-center justify-center shrink-0">
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
              <div className="p-5 pt-0 text-slate-700 leading-relaxed bg-slate-50 border-t border-slate-100 whitespace-pre-line text-xs sm:text-sm">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
