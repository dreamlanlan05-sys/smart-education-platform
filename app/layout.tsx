// app/layout.tsx
import './globals.css'
import './animations.css'

const inter = { className: '' }

export const metadata = {
  title: '智慧教育学习伙伴',
  description: 'AI驱动的学习革命平台',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <div className="background-animation"></div>
        <main>{children}</main>
      </body>
    </html>
  )
}
