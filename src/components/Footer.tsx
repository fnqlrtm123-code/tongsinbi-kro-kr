import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 text-gray-700 text-xs py-8 mt-12">
      <div className="max-w-5xl mx-auto px-4 space-y-6">
        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-800 border-b border-gray-200 pb-4">
          <Link href="/smartchoice/" className="hover:underline">
            스마트초이스 통합조회
          </Link>
          <span>|</span>
          <Link href="/telecom-guide/" className="hover:underline">
            통신사별 조회방법
          </Link>
          <span>|</span>
          <Link href="/discounts/" className="hover:underline">
            요금감면 혜택
          </Link>
          <span>|</span>
          <Link href="/calculator/" className="hover:underline">
            환급금 계산기
          </Link>
          <span>|</span>
          <Link href="/faq/" className="hover:underline">
            자주 묻는 질문
          </Link>
          <span>|</span>
          <Link href="/privacy/" className="font-bold text-gray-900 hover:underline">
            개인정보처리방침
          </Link>
          <span>|</span>
          <Link href="/terms/" className="hover:underline">
            이용약관
          </Link>
        </div>

        {/* Business Info & Disclaimer */}
        <div className="space-y-2 leading-relaxed text-gray-600">
          <p className="font-bold text-gray-900 text-sm">통신비미환급금조회 포털 안내센터</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <p>도메인: 통신비환급금조회.kro.kr (xn--jj0bb875j3kes9hx2oquh8la.kro.kr)</p>
            <p>공식 스마트초이스 포털: www.smartchoice.or.kr</p>
            <p>통신사 고객센터: SKT(1599-0011) / KT(1588-0010) / LGU+(1544-0010)</p>
            <p>운영시간: 평일 09:00 ~ 18:00 (온라인 조회는 365일 24시간 제공)</p>
          </div>

          <div className="bg-white p-3 border border-gray-200 rounded text-[11px] text-gray-600 mt-2">
            <strong>※ 법적 고지 및 면책사항:</strong> 본 사이트는 방송통신위원회 및 한국통신사업자연합회(KTOA)가 제공하는 통신비 미환급금 조회 서비스의 절차, 신청 방법, 요금 감면 정보 등을 이용자가 알기 쉽게 전달하는 비영리/독립 정보 안내 포털입니다. 본 사이트는 이용자의 개인정보나 주민등록번호, 계좌 비밀번호를 직접 수집하거나 대행 청구하지 않습니다. 실제 환급 신청 및 본인 인증은 정부/통신사 공식 사이트(www.smartchoice.or.kr)를 통해 직접 진행해 주시기 바랍니다.
          </div>
        </div>

        <p className="text-gray-500 text-[11px]">
          Copyright © {new Date().getFullYear()} 통신비환급금조회.kro.kr All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
