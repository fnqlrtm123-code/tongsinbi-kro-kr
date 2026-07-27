import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://통신비환급금조회.kro.kr'),
  title: {
    default: '통신비 환급금 조회 - 스마트초이스 미환급금·SKT·KT·LGU+ 1분 환급 신청',
    template: '%s | 통신비환급금조회.kro.kr',
  },
  description:
    '통신비 미환급금 조회 및 환급 신청 종합 가이드. SKT, KT, LGU+, 알뜰폰 해지 후 과오납금, 단말기 보증금, 스마트초이스 미환급금 1분 자동 조회 및 계좌 입금 방법 안내.',
  keywords: [
    '통신비환급금조회',
    '통신비 미환급금',
    '스마트초이스',
    '통신비 환급금 신청',
    'SKT 통신비 환급',
    'KT 통신비 미환급금',
    'LGU+ 통신비 환급',
    '알뜰폰 미환급금',
    '방송통신위원회 통신비',
    '통신비 요금감면',
    '통신비 이중납부 환급',
  ],
  authors: [{ name: '통신비미환급금조회 포털 안내센터' }],
  creator: '통신비미환급금조회 포털 안내센터',
  publisher: '통신비미환급금조회 포털 안내센터',
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    title: '통신비 환급금 조회 - 스마트초이스 미환급금 1분 신청',
    description:
      'SKT, KT, LGU+, 알뜰폰 미환급금, 이중납부 요금, 단말기 보증금 환급 신청 및 복지 감면 혜택 통합 안내.',
    url: 'https://통신비환급금조회.kro.kr',
    siteName: '통신비미환급금조회 포털 센터',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '통신비 미환급금 조회 포털',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://통신비환급금조회.kro.kr',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    name: '통신비 미환급금 통합 조회 및 신청 서비스',
    serviceType: 'Telecommunications Refund & Fee Reduction Information',
    provider: {
      '@type': 'Organization',
      name: '스마트초이스 (KTOA) 연동 안내 센터',
      url: 'https://통신비환급금조회.kro.kr',
      sameAs: ['https://www.smartchoice.or.kr'],
    },
    areaServed: {
      '@type': 'Country',
      name: 'South Korea',
    },
    description:
      '통신비 이중납부 과오납금, 단말기 미반환 보증금, 스마트초이스 미환급금 1분 조회 및 복지 요금감면 통합 안내',
  };

  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
