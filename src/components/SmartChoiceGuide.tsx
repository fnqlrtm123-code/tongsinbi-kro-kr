'use client';

import React from 'react';
import { Smartphone, ExternalLink, ShieldAlert, ArrowRight, Lock, CreditCard } from 'lucide-react';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export default function SmartChoiceGuide() {
  const steps = [
    {
      step: '1단계',
      title: '통신비 통합 조회 접속',
      desc: '방송통신위원회 미환급 포털에 접속하여 통신 미환급금 조회를 선택합니다.',
      icon: ExternalLink,
    },
    {
      step: '2단계',
      title: '본인 간편인증',
      desc: '이름, 주민번호 및 네이버, 카카오, 통신사 인증으로 본인 확인을 실시합니다.',
      icon: Lock,
    },
    {
      step: '3단계',
      title: '통신 4사 미환급액 확인',
      desc: 'SKT, KT, LGU+, 알뜰폰 4사의 이중납부금 및 단말 보증금을 1초 만에 확인합니다.',
      icon: Smartphone,
    },
    {
      step: '4단계',
      title: '환급 계좌 입력 & 입금',
      desc: '본인 명의 입금 계좌를 등록하면 1~2일 내로 지정 계좌로 미환급금이 지급됩니다.',
      icon: CreditCard,
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-slate-100 pb-4 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
              스마트초이스 1분 완성
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              통신비 미환급금 1분 통합조회 & 계좌 환급 가이드
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            통신사를 해지했거나 번호이동을 한 적이 있다면, 숨겨진 미환급금을 즉시 조회해보세요.
          </p>
        </div>

        <a
          href={TARGET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-sm rounded-lg shadow-sm transition-all hover:scale-105 shrink-0"
        >
          <span>스마트초이스 통합조회 ↗</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((item) => {
          const IconComp = item.icon;
          return (
            <div
              key={item.step}
              className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:bg-blue-50/50 hover:border-blue-300 transition-all space-y-3"
            >
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-extrabold bg-blue-600 text-white px-2.5 py-0.5 rounded">
                  {item.step}
                </span>
                <IconComp className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-sm">{item.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Security Warning Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 text-xs text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
            <span>스미싱·보이스피싱 예방 공식 안전 지침</span>
          </div>
          <p className="text-xs text-amber-800 leading-relaxed">
            정부기관 및 통신사는 환급을 빌미로 <strong>비밀번호, 보안카드, 앱 설치를 절대로 요구하지 않습니다.</strong> 100% 본인인증으로 안전하게 조회하세요.
          </p>
        </div>

        <a
          href={TARGET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg text-xs shrink-0 transition-colors shadow-sm"
        >
          안전 조회 시작하기 ↗
        </a>
      </div>
    </div>
  );
}
