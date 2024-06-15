'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import AuthModal from './authModal'

import globalS from '@/styles/global.module.scss'
import localS from '@/styles/components/headerStyles.module.scss'

const Header = () => {
   const [isModalOpen, setIsModalOpen] = useState(false)

   return (
      <header className={localS.header}>
         <div className={globalS.container_1180}>
            <div className={localS.wrapper}>
               <Link href="/" className={localS.logo}>
                  <Image src="/images/logo.png" width={60} height={60} alt="Logo" priority />
               </Link>

               <nav className={localS.navigation}>
                  <ul className={localS.list}>
                     <li>
                        <Link href="/" className={localS.link}>
                           Головна
                        </Link>
                     </li>
                     <li>
                        <Link href="/news" className={localS.link}>
                           Новини
                        </Link>
                     </li>
                     <li>
                        <Link href="/subjects" className={localS.link}>
                           Предмети
                        </Link>
                     </li>
                     <li>
                        <Link href="/support" className={localS.link}>
                           Підтримка
                        </Link>
                     </li>
                  </ul>

                  <button className={localS.button} onClick={() => setIsModalOpen(true)}>
                     Зареєструватись
                  </button>

                  <AuthModal active={isModalOpen} closeModal={() => setIsModalOpen(false)} />
               </nav>
            </div>
         </div>
      </header>
   )
}

export default Header
