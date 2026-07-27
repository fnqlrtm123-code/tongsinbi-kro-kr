import React from 'react';
import { Award, HeartHandshake, Check } from 'lucide-react';

export default function DiscountsGuide() {
  const discountList = [
    {
      target: '기초생활수급자 (생계/의료)',
      benefit: '월 기본료 최대 28,600원 면제 + 통화료 50% 감면 (월 최대 33,500원)',
      req: '주민센터 또는 복지로 / 통신사 114 전화 신청',
    },
    {
      target: '기초생활수급자 (주거/교육)',
      benefit: '월 기본료 12,100원 감면 + 통화료 35% 감면 (월 최대 23,650원)',
      req: '주민복지센터 또는 114 통신사 신청',
    },
    {
      target: '차상위계층 & 한부모가족',
      benefit: '월 기본료 12,100원 감면 + 통화료 35% 감면 (월 최대 23,650원)',
      req: '차상위 자격확인서 제출 또는 정부24 연동',
    },
    {
      target: '장애인 & 국가유공자',
      benefit: '기본료 및 통화료, 데이터 이용료 35% 감면 (알뜰폰 포함)',
      req: '복지카드 또는 유공자증 소지 후 신청',
    },
    {
      target: '만 65세 이상 기초연금수급자',
      benefit: '월 통신요금 50% 감면 (월 최대 12,100원 한도)',
      req: '114 전화 원스톱 간편 신청 가능',
    },
  ];

  return (
    <div className="border border-gray-300 rounded-lg p-5 sm:p-6 bg-white space-y-6">
      <div className="border-b border-gray-200 pb-3 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-black" />
            통신비 복지 요금 감면 대상자 및 혜택 안내
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            환급금과 별도로 대상자이신 경우 매월 통신비를 최대 33,500원까지 요금 감면받으실 수 있습니다.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {discountList.map((item, idx) => (
          <div key={idx} className="border border-gray-200 rounded p-4 bg-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="bg-black text-white text-[11px] font-bold px-2 py-0.5 rounded">대상</span>
                <h4 className="font-bold text-gray-900 text-sm">{item.target}</h4>
              </div>
              <p className="text-xs text-black font-semibold">{item.benefit}</p>
              <p className="text-xs text-gray-500">신청 방법: {item.req}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
