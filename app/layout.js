import Menu from '@/components/Menu'
import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'], weight: ["300"]})

export const metadata = {
  title: 'Dashboard',
  description: 'Simple dashboard app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className='flex flex-row bg-black'>
          <Menu/>
          {children}
        </div>
      </body>
    </html>
  )
}
