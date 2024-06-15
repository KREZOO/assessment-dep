'use client'

import { useFormContext } from 'react-hook-form'

import { LoginFormProps } from '@/types/loginFormProps'

import { errorMessages } from '@/public/messages/errorMessages'

import InputForm from './inputForm'
import CheckboxForm from './checkboxForm'

import localS from '@/styles/components/authFormsStyles.module.scss'
import globalS from '@/styles/global.module.scss'

const LoginForm: React.FC<LoginFormProps> = ({ switchToRegistrationForm }) => {
   const { handleSubmit, reset } = useFormContext()

   const onSubmit = async (data: any) => {
      alert('Дані на перевірку: ' + JSON.stringify(data))
      reset()
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={localS.form}>
         <div className={localS.wrapper}>
            <InputForm
               type="text"
               label="Ваш E-mail"
               placeholder="info@xyz.com"
               icon="/icons/input-fields/input-email.svg"
               name="email"
               required={true}
               pattern={/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/}
               errorMessages={errorMessages.login.email}
            />

            <InputForm
               type="password"
               label="Ваш пароль"
               placeholder="***********"
               icon="/icons/input-fields/input-password.svg"
               name="password"
               required={true}
               errorMessages={errorMessages.login.password}
            />

            <CheckboxForm label="Запам’ятати пароль" name="rememberPassword" required={false} />

            <button type="submit" className={globalS.button}>
               Увійти
            </button>

            <p className={localS.switchMassage}>
               Не маєте облікового запису?
               <span
                  onClick={() => {
                     switchToRegistrationForm()
                     reset()
                  }}
                  className={localS.switchLink}
               >
                  Зареєструватись
               </span>
            </p>
         </div>
      </form>
   )
}

export default LoginForm
