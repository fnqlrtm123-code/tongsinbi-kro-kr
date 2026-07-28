import React from 'react';
import Link from 'next/link';

const TARGET_URL = 'https://a.mrbrisbaneinsouth.kr/1228/';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        {/* Top Direct Banner */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-black text-white">통신비 미환급금, 지금 즉시 확인해보세요</h3>
            <p className="text-xs text-slate-300">
              SKT, KT, LGU+, 알뜰폰 5년 내 해지 내역이 있다면 1분 만에 조회하고 계좌로 환급받을 수 있습니다.
            </p>
          </div>
          <a
            href={TARGET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-extrabold rounded-xl shadow-lg shadow-blue-500/20 text-xs shrink-0 transition-transform hover:scale-105"
          >
            미환급금 1분 조회하기 ↗
          </a>
        </div>

        {/* Essential Footer Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-slate-400 border-b border-slate-800/80 pb-6">
          <a href={TARGET_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            스마트초이스 1분 조회
          </a>
          <span className="text-slate-800">|</span>
          <a href={TARGET_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            통신사별 미환급금 조회
          </a>
          <span className="text-slate-800">|</span>
          <a href={TARGET_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            통신비 요금감면 신청
          </a>
          <span className="text-slate-800">|</span>
          <Link href="/privacy/" className="font-extrabold text-blue-400 hover:underline">
            개인정보처리방침
          </Link>
          <span className="text-slate-800">|</span>
          <Link href="/terms/" className="hover:text-white transition-colors">
            이용약관
          </Link>
        </div>

        {/* Info & Legal Disclaimer */}
        <div className="space-y-3 leading-relaxed text-slate-500 text-xs">
          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <p className="font-extrabold text-slate-300 text-sm">통신비미환급금조회 포털 센터</p>
            <p className="text-[11px] text-slate-500">
              공식 도메인: 통신비환급금조회.kro.kr (xn--jj0bb875j3kes9hx2oquh8la.kro.kr)
            </p>
          </div>

          <div className="bg-slate-900/90 p-4 border border-slate-800/80 rounded-xl text-[11px] text-slate-400 space-y-1">
            <p className="font-bold text-slate-300">※ 법적 고지 및 안내:</p>
            <p>
              본 웹사이트는 방송통신위원회 및 한국통신사업자연합회(KTOA) 스마트초이스(SmartChoice) 서비스의 통신비 미환급금 조회 신청 절차, 요금감면 제도, SKT·KT·LGU+·알뜰폰 과오납금 반환 안내 정보를 전달하는 가이드 포털입니다. 본 사이트는 이용자의 주민등록번호나 개인 계좌 정보를 수집하거나 대행 수수료를 받지 않으며, 모든 조회는 공식 링크를 통해 본인인증으로 진행됩니다.
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-[11px] text-center pt-2">
          Copyright © {new Date().getFullYear()} 통신비환급금조회.kro.kr All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
