import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/auth-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/sonner'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nhlamulo Academy of Music | Learn Instruments Beginner to Advanced',
  description:
    'Nhlamulo Academy of Music, founded by Nhlamulo Fani Sibuyi. Start with free beginner lessons across piano, guitar, drums, violin and more, then grow with private online coaching.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1c2e4a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <AuthProvider>
          <div className="flex min-h-dvh flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster position="top-center" richColors />
        </AuthProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
