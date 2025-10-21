import type { Metadata } from 'next'
import { DefaultSeo } from 'next-seo'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: 'John Owolabi — %s',
    default: 'John Owolabi — Designer & Writer',
  },
  description: 'Personal site of John Owolabi, designer and writer focused on intentional, minimal experiences.',
  keywords: ['design', 'writing', 'minimalism', 'personal site'],
  authors: [{ name: 'John Owolabi' }],
  creator: 'John Owolabi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johnowolabi.com',
    siteName: 'John Owolabi',
    title: 'John Owolabi — Designer & Writer',
    description: 'Personal site of John Owolabi, designer and writer focused on intentional, minimal experiences.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'John Owolabi — Designer & Writer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Owolabi — Designer & Writer',
    description: 'Personal site of John Owolabi, designer and writer focused on intentional, minimal experiences.',
    images: ['/og-image.jpg'],
    creator: '@johnowolabi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <Header />
        
        <main id="main-content" className="flex-1">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}
