'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import AuthModal from './authModal'

import locS from '@/styles/components/footerStyles.module.scss'
import globS from '@/styles/global.module.scss'

const Footer = () => {
   const [isModalOpen, setIsModalOpen] = useState(false)

   return (
      <footer className={locS.footer}>
         <div className={`${globS.container_1180} ${locS.footerTop}`}>
            <nav className={locS.nav}>
               <div className={locS.list}>
                  <h4 className={locS.listTitle}>Про нас</h4>
                  <ul className={locS.listItems}>
                     <li>
                        <Link className={locS.link} href="/about-generator">
                           Про “Генератор тестів”
                        </Link>
                     </li>
                     <li>
                        <Link className={locS.link} href="/news">
                           Новини
                        </Link>
                     </li>
                     <li>
                        <Link className={locS.link} href="/reviews">
                           Відгуки
                        </Link>
                     </li>
                     <li>
                        <Link className={locS.link} href="/blog">
                           Блог
                        </Link>
                     </li>
                  </ul>
               </div>

               <div className={locS.list}>
                  <h4 className={locS.listTitle}>Ресурси</h4>
                  <ul className={locS.listItems}>
                     <li>
                        <button
                           type="button"
                           onClick={() => setIsModalOpen(true)}
                           className={locS.link}
                        >
                           Зареєструватися
                        </button>

                        <AuthModal active={isModalOpen} closeModal={() => setIsModalOpen(false)} />
                     </li>
                     <li>
                        <Link className={locS.link} href="/support">
                           Довідка
                        </Link>
                     </li>
                     <li>
                        <Link className={locS.link} href="/faq">
                           Часті питання (FAQ)
                        </Link>
                     </li>
                     <li>
                        <Link className={locS.link} href="/terms">
                           Умови надання послуг
                        </Link>
                     </li>
                  </ul>
               </div>

               <div className={locS.list}>
                  <h4 className={locS.listTitle}>Контакти</h4>
                  <ul className={locS.listItems}>
                     <li>
                        <Image
                           src="/icons/support-icon.svg"
                           className={globS.mr_4}
                           width={24}
                           height={24}
                           alt="Logo"
                           priority
                        />
                        Підтримка:
                     </li>
                     <li>
                        <Link className={locS.link} href="tel:+0991234567">
                           (099) 123-45-67
                        </Link>
                     </li>
                     <li>
                        <Image
                           src="/icons/email-icon.svg"
                           className={globS.mr_4}
                           width={24}
                           height={24}
                           alt="Logo"
                           priority
                        />
                        E-mail:
                     </li>
                     <li>
                        <Link className={locS.link} href="info@testgenerator.com">
                           info@testgenerator.com
                        </Link>
                     </li>
                  </ul>
               </div>
            </nav>

            <div className={locS.socialLinks}>
               <Link href="telegram">
                  <Image
                     src="/icons/telegram-icon.svg"
                     className={globS.mr_4}
                     width={32}
                     height={32}
                     alt="telegram"
                     priority
                  />
               </Link>

               <Link href="facebook">
                  <Image
                     src="/icons/facebook-icon.svg"
                     className={globS.mr_4}
                     width={32}
                     height={32}
                     alt="facebook"
                     priority
                  />
               </Link>

               <Link href="instagram">
                  <Image
                     src="/icons/instagram-icon.svg"
                     className={globS.mr_4}
                     width={32}
                     height={32}
                     alt="instagram"
                     priority
                  />
               </Link>

               <Link href="twitter">
                  <Image
                     src="/icons/twitter-icon.svg"
                     className={globS.mr_4}
                     width={32}
                     height={32}
                     alt="twitter"
                     priority
                  />
               </Link>
            </div>
         </div>

         <div className={`${globS.container_1180} ${locS.footerBottom}`}>
            <Link href="/">
               <Image src="/images/logo.png" width={100} height={100} alt="Logo" priority />
            </Link>

            <div className={locS.footerBottomContent}>
               <p>Всі права захищено ©2023</p>

               <Link href="/privacy-policy" className={locS.link}>
                  Політика конфіденційності
               </Link>
            </div>
         </div>
      </footer>
   )
}

export default Footer
