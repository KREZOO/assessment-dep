'use client'

import Image from 'next/image'

import { useFormContext } from 'react-hook-form'

import s from '@/styles/components/operationsPanelStyles.module.scss'

const OperationsPanel = () => {
   const { handleSubmit } = useFormContext()

   const onSubmit = (data: any) => {
      alert('Дані на відправлення: ' + JSON.stringify(data))
   }

   return (
      <div className={s.operationsPanel}>
         <div className={s.wrapper}>
            <button type="button" className={s.button}>
               <Image src="./icons/settings-icon.svg" alt="Settings" width={40} height={40} />
               Налаштування
            </button>

            <button type="button" className={s.button}>
               <Image src="./icons/view-icon.svg" alt="View" width={40} height={40} />
               Переглянути
            </button>

            <button type="submit" className={s.button} onClick={handleSubmit(onSubmit)}>
               <Image src="./icons/save-icon.svg" alt="Save" width={40} height={40} />
               Зберегти
            </button>
         </div>
      </div>
   )
}

export default OperationsPanel
