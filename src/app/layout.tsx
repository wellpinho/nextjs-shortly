import './globals.css'
import { Poppins } from 'next/font/google'

const inter = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata = {
  title: 'Weelpinho Shortly',
  description: 'Created with NextJS and Tailwindcss',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
