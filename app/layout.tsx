import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

import { ScrollProgress } from '@/components/ui/scroll-progress'
import { Cursor } from '@/components/motion-primitives/cursor'
import { Fireflies } from '@/components/ui/Fireflies'
import { Menu } from '@/components/ui/Menu'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Saheel Sarker - Portfolio',
  description:
    'Software developer with a passion for creating innovative solutions.',
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`${geist.variable} ${geistMono.variable} bg-zinc-200 tracking-tight antialiased dark:bg-zinc-950/60`}
      >
        <ScrollProgress
          className="fixed top-0 z-20 h-1.25 bg-gray-300 dark:bg-zinc-600"
          springOptions={{
          bounce: 0,
          }}
        />
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
          <Menu />
            <Cursor
            springConfig={{
              stiffness: 50,
              damping: 5,
              bounce: 0,
              mass: 0.15
            }}
            ><div className='w-10 h-10 border-zinc-950 dark:border-zinc-50 md:border-2 rounded-full'></div></Cursor>
            <Cursor><div className='md:w-1 md:h-1 bg-zinc-950 dark:bg-zinc-50 rounded-full'></div></Cursor>
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20 overflow-hidden">
              {/* <Fireflies></Fireflies> */}
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
