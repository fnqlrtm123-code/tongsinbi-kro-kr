import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-600 text-xs py-8 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 space-y-5">
        {/* Legal Policy Links Only */}
        <div className="flex justify-center gap-4 text-xs font-bold text-slate-700 border-b border-slate-200 pb-4">
          <Link href="/privacy/" className="font-extrabold text-blue-600 hover:underline">
            개인정보처리방침
          </Link>
          <span className="text-slate-300">|</span>
          <Link href="/terms/" className="hover:text-slate-900 transition-colors">
            이용약관
          </Link>
        </div>

        {/* Info & Legal Disclaimer */}
        <div className="space-y-2 leading-relaxed text-slate-500 text-xs">
          <p className="font-extrabold text-slate-900 text-sm">통신비미환급금조회 포털 안내센터</p>
          <div className="bg-white p-4 border border-slate-200 rounded-xl text-[11px] text-slate-600 space-y-1">
            <p className="font-bold text-slate-800">※ 법적 고지 및 안내사항:</p>
            <p>
              본 웹사이트는 방송통신위원회 및 한국통신사업자연합회(KTOA) 스마트초이스(SmartChoice) 서비스의 통신비 미환급금 조회 신청 절차, 요금감면 제도, SKT·KT·LGU+·알뜰폰 과오납금 반환 안내 정보를 전달하는 가이드 포털입니다. 본 사이트는 이용자의 주민등록번호나 개인 계좌 정보를 수집하거나 대행 수수료를 받지 않으며, 모든 조회는 공식 링크를 통해 본인인증으로 진행됩니다.
            </p>
          </div>
        </div>

        <p className="text-slate-400 text-[11px] text-center pt-1">
          Copyright © {new Date().getFullYear()} 통신비미환급금조회 포털 안내센터 All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
