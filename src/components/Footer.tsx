import React from 'react';
import Link from 'next/link';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-12 mt-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        {/* Top CTA Banner in Footer */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-black text-white">통신비 미환급금, 지금 즉시 확인해보셨나요?</h3>
            <p className="text-xs text-slate-300">
              SKT, KT, LGU+, 알뜰폰 5년 내 해지 내역이 있다면 지금 1분 만에 조회하고 계좌로 환급받으세요.
            </p>
          </div>
          <a
            href={TARGET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-extrabold rounded-xl shadow-lg shadow-blue-500/20 text-xs shrink-0 transition-transform hover:scale-105"
          >
            미환급금 1분 조회 ↗
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-300 border-b border-slate-800 pb-6">
          <Link href="/smartchoice/" className="hover:text-white transition-colors">
            스마트초이스 통합조회
          </Link>
          <span className="text-slate-700">|</span>
          <Link href="/telecom-guide/" className="hover:text-white transition-colors">
            통신사별 안내가이드
          </Link>
          <span className="text-slate-700">|</span>
          <Link href="/discounts/" className="hover:text-white transition-colors">
            통신비 요금감면
          </Link>
          <span className="text-slate-700">|</span>
          <Link href="/calculator/" className="hover:text-white transition-colors">
            환급금 자동계산기
          </Link>
          <span className="text-slate-700">|</span>
          <Link href="/faq/" className="hover:text-white transition-colors">
            자주 묻는 질문
          </Link>
          <span className="text-slate-700">|</span>
          <Link href="/privacy/" className="font-extrabold text-blue-400 hover:underline">
            개인정보처리방침
          </Link>
          <span className="text-slate-700">|</span>
          <Link href="/terms/" className="hover:text-white transition-colors">
            이용약관
          </Link>
        </div>

        {/* Info & Legal Disclaimer */}
        <div className="space-y-3 leading-relaxed text-slate-400 text-xs">
          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <p className="font-extrabold text-slate-200 text-sm">통신비미환급금조회 포털 센터</p>
            <p className="text-[11px] text-slate-500">
              공식 도메인: 통신비환급금조회.kro.kr (xn--jj0bb875j3kes9hx2oquh8la.kro.kr)
            </p>
          </div>

          <div className="bg-slate-950 p-4 border border-slate-800/80 rounded-xl text-[11px] text-slate-400 space-y-1">
            <p className="font-bold text-slate-300">※ 법적 고지 및 면책사항:</p>
            <p>
              본 웹사이트는 방송통신위원회 및 한국통신사업자연합회(KTOA) 스마트초이스(SmartChoice) 서비스의 통신비 미환급금 조회 신청 절차, 요금감면 제도, SKT·KT·LGU+·알뜰폰 과오납금 반환 안내 정보를 알기 쉽게 제공하는 인포메이션 포털입니다. 본 웹사이트는 이용자의 개인정보, 주민등록번호, 계좌 비밀번호를 요구하거나 직접 저장·수집하지 않습니다. 실제 미환급금 조회 및 계좌 입금 신청은 안내 버튼을 통해 공식 조회 페이지에서 100% 안전하게 본인인증 후 진행됩니다.
            </p>
          </div>
        </div>

        <p className="text-slate-500 text-[11px] text-center pt-2">
          Copyright © {new Date().getFullYear()} 통신비환급금조회.kro.kr All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
