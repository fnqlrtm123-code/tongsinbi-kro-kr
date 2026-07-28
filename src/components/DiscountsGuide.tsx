'use client';

import React from 'react';
import { HeartHandshake, CheckCircle2, ArrowRight, Sparkles, Gift } from 'lucide-react';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export default function DiscountsGuide() {
  const discountList = [
    {
      target: '기초생활수급자 (생계/의료)',
      benefit: '월 기본료 최대 28,600원 면제 + 통화료 50% 감면 (월 최대 33,500원)',
      req: '주민센터 방문, 복지로 사이트 또는 114 간편 신청',
      tag: '최대 감면',
    },
    {
      target: '기초생활수급자 (주거/교육)',
      benefit: '월 기본료 12,100원 감면 + 통화료 35% 감면 (월 최대 23,650원)',
      req: '주민복지센터 또는 통신사 고객센터(114) 신청',
      tag: '주거/교육',
    },
    {
      target: '차상위계층 & 한부모가족',
      benefit: '월 기본료 12,100원 감면 + 통화료 35% 감면 (월 최대 23,650원)',
      req: '차상위 자격확인서 발급 후 정부24/114 신청',
      tag: '차상위',
    },
    {
      target: '장애인 & 국가유공자',
      benefit: '기본료, 통화료, 데이터 이용료 35% 감면 (알뜰폰 일부 포함)',
      req: '복지카드/유공자증 소지 후 통신사 신청',
      tag: '복지혜택',
    },
    {
      target: '만 65세 이상 기초연금수급자',
      benefit: '월 통신요금 50% 자동 감면 (월 최대 12,100원 한도)',
      req: '114 전화 연결 시 원스톱 즉시 신청 가능',
      tag: '어르신혜택',
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
      <div className="border-b border-slate-100 pb-5 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-2.5 py-0.5 rounded-full">
              월 최대 33,500원 할인
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <Gift className="w-6 h-6 text-emerald-600" />
              통신비 복지 요금 감면 대상자 및 혜택 안내
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            환급금과 별도로 매월 납부하는 통신비를 크게 감면받을 수 있는 정부 복지 혜택입니다.
          </p>
        </div>

        <a
          href={TARGET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl transition-all shadow-md shadow-emerald-500/20 shrink-0"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>감면자격 1분 확인 ↗</span>
        </a>
      </div>

      <div className="space-y-3">
        {discountList.map((item, idx) => (
          <div
            key={idx}
            className="border border-slate-200/90 rounded-2xl p-4 sm:p-5 bg-slate-50/50 hover:bg-white hover:border-emerald-300 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="bg-slate-900 text-white text-[10px] font-black px-2 py-0.5 rounded-md">
                  {item.tag}
                </span>
                <h4 className="font-extrabold text-slate-900 text-sm">{item.target}</h4>
              </div>
              <p className="text-xs text-emerald-700 font-extrabold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {item.benefit}
              </p>
              <p className="text-[11px] text-slate-500">신청 방법: {item.req}</p>
            </div>

            <a
              href={TARGET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shrink-0 transition-colors"
            >
              혜택 신청 ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
