import React from 'react';
import { telecomList } from '@/data/telecomData';
import { Phone, Globe, Info } from 'lucide-react';

export default function TelecomGuide() {
  return (
    <div className="border border-gray-300 rounded-lg p-5 sm:p-6 bg-white space-y-6">
      <div className="border-b border-gray-200 pb-3">
        <h2 className="text-xl font-bold text-gray-900">통신사별(SKT, KT, LGU+, 알뜰폰) 미환급금 개별 조회 가이드</h2>
        <p className="text-xs text-gray-600 mt-1">
          스마트초이스 통합조회 외에도 각 통신사 공식 고객센터 및 홈페이지에서 직접 미환급금을 확인하실 수 있습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {telecomList.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <h3 className="font-bold text-gray-900 text-base">{item.name}</h3>
              <span className="text-xs px-2 py-0.5 border border-gray-300 rounded bg-white text-gray-700 font-semibold">
                {item.category}
              </span>
            </div>

            <div className="space-y-1.5 text-xs text-gray-700">
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-gray-500" />
                <span className="font-semibold text-gray-900">고객센터:</span> {item.callCenter} (ARS {item.arsNumber})
              </p>
              <p className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-gray-500" />
                <span className="font-semibold text-gray-900">조회 위치:</span> {item.inquiryMethod}
              </p>
            </div>

            <div className="pt-2 border-t border-gray-200">
              <p className="text-[11px] font-semibold text-gray-600 mb-1">주요 환급 발생 유형:</p>
              <div className="flex flex-wrap gap-1">
                {item.refundTypes.map((type, idx) => (
                  <span key={idx} className="bg-white border border-gray-300 text-gray-700 text-[11px] px-2 py-0.5 rounded">
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={item.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 bg-white border border-gray-300 text-gray-900 font-bold text-xs rounded text-center block hover:bg-gray-100 transition-colors"
            >
              {item.name} 공식 홈페이지 이동 ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
