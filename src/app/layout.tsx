import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '別當韭菜了理財一點就通',
  description: 'ETF與股票理財工具網站',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  )
}
