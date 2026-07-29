import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://통신비환급금조회.kro.kr'),
  title: {
    default: '통신비 환급금 조회 - 미환급 통신비 1분 통합조회 센터',
    template: '%s - 통신비환급금조회',
  },
  description:
    '통신비 미환급금 조회 및 환급 신청 안내. SKT, KT, LGU+, 알뜰폰 이중납부 요금, 단말기 보증금, 과오납금 1분 자동 조회 및 환급 방법 안내.',
  keywords: [
    '통신비환급금조회',
    '통신비 미환급금',
    '미환급 통신비 조회',
    '스마트초이스',
    '통신비 환급금 신청',
    'SKT 통신비 환급금',
    'KT 통신비 미환급금',
    'LGU+ 통신비 환급금',
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
    title: '통신비 환급금 조회 - 미환급 통신비 1분 통합조회 센터',
    description:
      '통신비 미환급금 조회 및 환급 신청 안내. SKT, KT, LGU+, 알뜰폰 이중납부 요금, 단말기 보증금, 과오납금 1분 자동 조회 및 환급 방법 안내.',
    url: 'https://통신비환급금조회.kro.kr',
    siteName: '통신비미환급금조회 포털 센터',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '통신비 미환급금 조회 포털 센터',
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
  verification: {
    other: {
      'naver-site-verification': 'accce1d4fc1ce79ab29f4ed8011b60b782710f41',
      'msvalidate.01': '72FE2EED9E2A787ABAD7AC2E77CB6992',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for Naver / Bing SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '통신비 미환급금 통합 조회 안내 센터',
    url: 'https://통신비환급금조회.kro.kr',
    description:
      '통신비 이중납부 과오납금, 단말기 미반환 보증금, 스마트초이스 미환급금 1분 조회 및 복지 요금감면 통합 안내',
    publisher: {
      '@type': 'Organization',
      name: '통신비미환급금조회 포털 센터',
    },
  };

  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="accce1d4fc1ce79ab29f4ed8011b60b782710f41" />
        <meta name="msvalidate.01" content="72FE2EED9E2A787ABAD7AC2E77CB6992" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
