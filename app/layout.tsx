import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from 'next-themes'
import { Header } from './header'
import { Footer } from './footer'
import { cn } from '@/lib/utils'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nim-fawn.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Nagi — Old youth company',
    template: '%s | Nagi',
  },
  description:
    'Nagi is a Swedish youth company (UF) from Danderyds Gymnasium 2023-2024. ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xua6tvy.css" />
      </head>
      <body
        className={cn(
          'font-neue overflow-x-hidden bg-white tracking-tight antialiased',
          'dark:bg-zinc-950',
        )}
      >
        <ThemeProvider
          enableSystem
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="font-neue flex min-h-screen w-full flex-col">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
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
