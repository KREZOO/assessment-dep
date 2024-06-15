'use client'

import { useFormContext } from 'react-hook-form'

import { RegstartionFormProps } from '@/types/registrationFormProps'

import { errorMessages } from '@/public/messages/errorMessages'

import InputForm from './inputForm'
import CheckboxForm from './checkboxForm'

import localS from '@/styles/components/authFormsStyles.module.scss'
import globalS from '@/styles/global.module.scss'

const RegistrationForm: React.FC<RegstartionFormProps> = ({ switchToLoginForm }) => {
   const { handleSubmit, watch, reset } = useFormContext()

   const onSubmit = (data: any) => {
      alert('Form submitted: ' + JSON.stringify(data))
      reset()
   }

   const validateConfirmPassword = (value: string) => {
      const password = watch('password')
      return value === password
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={localS.form}>
         <div className={localS.wrapper}>
            <InputForm
               type="text"
               label="Ваше ім'я"
               placeholder="Введіть своє ім'я."
               icon="/icons/input-fields/input-name.svg"
               name="name"
               required={true}
               minLength={3}
               pattern={/^[A-ZА-ЯЁ]/}
               errorMessages={errorMessages.signup.name}
            />

            <InputForm
               type="text"
               label="Ваш E-mail"
               placeholder="info@xyz.com"
               icon="/icons/input-fields/input-email.svg"
               name="email"
               required={true}
               pattern={/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/}
               errorMessages={errorMessages.signup.email}
            />

            <InputForm
               type="password"
               label="Ваш пароль"
               placeholder="***********"
               icon="/icons/input-fields/input-password.svg"
               name="password"
               required={true}
               minLength={3}
               errorMessages={errorMessages.signup.password}
            />

            <InputForm
               type="password"
               label="Підтвердіть пароль"
               placeholder="***********"
               icon="/icons/input-fields/input-password.svg"
               name="confirmPassword"
               required={true}
               validate={validateConfirmPassword}
               errorMessages={errorMessages.signup.confirmPassword}
            />

            <CheckboxForm
               label="Погоджуюсь з умовами платформи"
               name="agreeTerms"
               required={true}
            />

            <button type="submit" className={`${globalS.button} ${globalS.mt_20}`}>
               Зареєструватися
            </button>

            <p className={localS.switchMassage}>
               Вже маєте обліковий запис?
               <span
                  onClick={() => {
                     switchToLoginForm()
                     reset()
                  }}
                  className={localS.switchLink}
               >
                  Увійти
               </span>
            </p>
         </div>
      </form>
   )
}

export default RegistrationForm
