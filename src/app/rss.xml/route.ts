export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://통신비환급금조회.kro.kr';

  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>통신비미환급금조회 포털 안내센터</title>
    <link>${baseUrl}</link>
    <description>통신비 미환급금 통합 조회, 스마트초이스 1분 신청 및 SKT KT LGU+ 알뜰폰 환급 신청 가이드</description>
    <language>ko-KR</language>
    <item>
      <title>스마트초이스 통신비 미환급금 1분 통합조회 신청방법</title>
      <link>${baseUrl}/smartchoice/</link>
      <description>방송통신위원회 공식 스마트초이스 포털을 통한 미환급금 조회 및 본인 계좌 환급 등록 절차</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
    <item>
      <title>SKT·KT·LGU+·알뜰폰 통신사별 미환급금 조회방법</title>
      <link>${baseUrl}/telecom-guide/</link>
      <description>이통3사 및 알뜰폰 개별 고객센터, Tworld, 마이케이티, U+모바일 미환급금 조회 가이드</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
    <item>
      <title>통신비 복지 요금감면 대상자 및 혜택 신청 가이드 (월 최대 33,500원 할인)</title>
      <link>${baseUrl}/discounts/</link>
      <description>기초생활수급자, 차상위계층, 장애인, 국가유공자, 기초연금수급자 통신비 요금감면 안내</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
