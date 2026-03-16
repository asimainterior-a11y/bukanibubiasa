// app/layout.tsx
import './globals.css'
import { Cinzel, Plus_Jakarta_Sans } from 'next/font/google'
import SmoothScroll from '../components/animations/SmoothScroll';

// 1. Definisikan font di luar komponen agar tidak di-re-instantiate
const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '700', '800', '900'], // Ditambah untuk variasi Bold di Hero
})

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${cinzel.variable} ${jakarta.variable}`}>
      <body className="bg-[#4d0011] text-white antialiased"> 
        {/* 2. Bungkus semua children dengan SmoothScroll agar seluruh page terasa mewah */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}