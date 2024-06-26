import type { Metadata } from 'next'

import StoreProvider from './storeProvider'
import '@/styles/reset.css'
import s from '@/styles/global.module.scss'

export const metadata: Metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="en">
         <body className={s.body}>
            <StoreProvider>{children}</StoreProvider>
         </body>
      </html>
   )
}
