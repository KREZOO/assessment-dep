'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FormProvider, useForm } from 'react-hook-form'

import { AuthModalProps } from '@/types/authModalProps'

import RegistrationForm from './registrationForm'
import LoginForm from './loginForm'

import localS from '@/styles/components/authModalStyles.module.scss'
import globalS from '@/styles/global.module.scss'

const AuthModal: React.FC<AuthModalProps> = ({ active, closeModal }) => {
   const methods = useForm({
      mode: 'onChange'
   })

   const [isLoginForm, setIsLoginForm] = useState(false)

   const switchToLoginForm = (value: boolean) => {
      setIsLoginForm(value)
      methods.reset()
   }

   return (
      <AnimatePresence>
         {active && (
            <Dialog open={active} onClose={closeModal} className={localS.modal}>
               <Dialog.Overlay className={localS.overlay} />
               <motion.div
                  className={localS.content}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
               >
                  <Image
                     className={globalS.f1}
                     src="/images/auth-modal-image.jpg"
                     alt="auth modal image"
                     width={1000}
                     height={1000}
                  />

                  <div className={`${globalS.f1} ${localS.columnRight}`}>
                     <div className={localS.wrapper}>
                        <div className={localS.switchFormButtons}>
                           <button
                              onClick={() => {
                                 setIsLoginForm(true)
                                 methods.reset()
                              }}
                              className={`${localS.switchButton} 
                              ${isLoginForm && localS.active}`}
                           >
                              Увійти
                           </button>
                           <button
                              onClick={() => {
                                 setIsLoginForm(false)
                                 methods.reset()
                              }}
                              className={`${localS.switchButton} 
                              ${!isLoginForm && localS.active}`}
                           >
                              Зареєструватись
                           </button>
                        </div>

                        <FormProvider {...methods}>
                           {isLoginForm ? (
                              <LoginForm
                                 switchToRegistrationForm={() => switchToLoginForm(false)}
                              />
                           ) : (
                              <RegistrationForm switchToLoginForm={() => switchToLoginForm(true)} />
                           )}
                        </FormProvider>
                     </div>
                  </div>
               </motion.div>
            </Dialog>
         )}
      </AnimatePresence>
   )
}

export default AuthModal
