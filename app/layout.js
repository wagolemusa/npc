import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/layouts/Header'
import { GlobalProvider } from './GlobalProvider'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
        <Header />
        {children}
        </GlobalProvider>
      </body>
    </html>
  )
}