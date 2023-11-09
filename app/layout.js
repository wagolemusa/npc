import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/layouts/Header'
import Header2 from '../components/layouts/Header2'
import Footer from '../components/layouts/Footer'
import { GlobalProvider } from './GlobalProvider'
import HeaderLine from "../components/layouts/HeaderLine"
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'NPC',
  description: 'CCTV, ICT and Electrical',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
        <HeaderLine />
        <Header />
        {/* <Header2 /> */}
        {children}
        <Footer />
        </GlobalProvider>
      </body>
    </html>
  )
}
