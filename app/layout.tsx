import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HODL',
  description: 'Created by teamdotapk',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head><meta name="solads-site-verification" content="solads_verify_1755640378465_8c56007aac5182baf1c232277be5adaf" /></head>
      <body>{children}</body>
    </html>
  )
}
