'use client'

import { useFormContext } from 'react-hook-form'

import { CheckboxFormProps } from '@/types/checkboxFormProps'

import s from '@/styles/components/checkboxFormStyles.module.scss'

const CheckboxForm: React.FC<CheckboxFormProps> = ({ label, name, required }) => {
   const { register } = useFormContext()

   return (
      <label className={s.label}>
         <input
            required={required}
            type="checkbox"
            className={s.realCheckbox}
            {...register(name, { required })}
         />
         <span className={s.customCheckbox}></span>
         <span className={s.text}>{label}</span>
      </label>
   )
}

export default CheckboxForm
