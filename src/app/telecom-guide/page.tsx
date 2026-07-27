import React from 'react';
import TelecomGuide from '@/components/TelecomGuide';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SKT·KT·LGU+·알뜰폰 통신사별 미환급금 조회방법',
  description:
    '3대 이동통신사(SK텔레콤, 케이티, LG유플러스) 및 알뜰폰 개별 고객센터, Tworld, 마이케이티, U+모바일 앱을 통한 통신비 미환급금 조회 방법 정리.',
};

export default function TelecomGuidePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 text-gray-900">
      <div className="border-b border-gray-300 pb-4">
        <h1 className="text-2xl font-extrabold text-gray-900">통신사별(SKT, KT, LGU+, 알뜰폰) 미환급금 안내</h1>
        <p className="text-sm text-gray-600 mt-1">
          각 통신사별 개별 고객센터 번호 및 마이페이지 내 미환급금 조회 위치입니다.
        </p>
      </div>

      <TelecomGuide />
    </div>
  );
}
