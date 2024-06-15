'use client'

import Image from 'next/image'

import { useFormContext } from 'react-hook-form'
import { InputFormProps } from '@/types/inputFormProps'

import s from '@/styles/components/inputFormStyles.module.scss'

const InputForm: React.FC<InputFormProps> = ({
   type,
   placeholder,
   required,
   name,
   label,
   minLength,
   icon,
   errorMessages,
   pattern,
   validate
}) => {
   const {
      register,
      formState: { errors },
      watch
   } = useFormContext()

   const hasError = errors[name] !== undefined
   const isFilledCorrectly = !errors[name] && watch(name)

   return (
      <div className={s.container}>
         <label className={s.label}>
            {required ? (
               <span>
                  {label}
                  <span className={s.required}>*</span>
               </span>
            ) : (
               label
            )}

            <div className={s.iconContainer}>
               <Image className={s.icon} src={icon} alt="icon" width={24} height={24} />

               <input
                  className={`${s.input} ${
                     hasError && s.inputError
                  } ${isFilledCorrectly && s.inputCorrect}`}
                  type={type}
                  placeholder={placeholder}
                  {...register(name, { required, minLength, pattern, validate })}
               />

               {isFilledCorrectly && (
                  <svg
                     className={s.correctIcon}
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M21 7.00009L9 19.0001L3.5 13.5001L4.91 12.0901L9 16.1701L19.59 5.59009L21 7.00009Z"
                        fill="#14d710"
                     />
                  </svg>
               )}

               {hasError && (
                  <Image
                     className={s.errorIcon}
                     src="/icons/input-fields/input-error.svg"
                     alt="error icon"
                     width={24}
                     height={24}
                  />
               )}

               <div className={s.errors}>
                  {errors[name] && (
                     <span>
                        {errors[name]?.type === 'required' && errorMessages?.required}
                        {errors[name]?.type === 'minLength' && errorMessages?.minLength}
                        {errors[name]?.type === 'pattern' && errorMessages?.pattern}
                        {errors[name]?.type === 'validate' && errorMessages?.validate}
                     </span>
                  )}
               </div>
            </div>
         </label>
      </div>
   )
}

export default InputForm
