'use client';

import React, { useState } from 'react';
import { faqList } from '@/data/telecomData';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FaqSection({ limit }: { limit?: number }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const items = limit ? faqList.slice(0, limit) : faqList;

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden divide-y divide-gray-200 bg-white">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={idx} className="text-sm">
            <button
              onClick={() => toggle(idx)}
              className="w-full p-4 text-left font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50 gap-2"
            >
              <span className="flex items-center gap-2">
                <span className="text-black font-black text-base">Q.</span>
                {item.question}
              </span>
              <span className="text-gray-400 text-xs font-normal shrink-0">
                {isOpen ? (
                  <span className="flex items-center gap-1">▲ 닫기</span>
                ) : (
                  <span className="flex items-center gap-1">▼ 열기</span>
                )}
              </span>
            </button>
            {isOpen && (
              <div className="p-4 pt-0 text-gray-700 leading-relaxed bg-gray-50 border-t border-gray-100 whitespace-pre-line text-xs">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
