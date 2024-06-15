import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import {
   addOption,
   removeOption,
   updateOption,
   setSelectedRadioOption,
   selectQuestions,
   selectOptions
} from '@/store/slices/createTaskSlice'

import QuestionOptionInput from './questionOptionInput'

import { AnswersProps } from '@/types/answersProps'

import s from '@/styles/components/answersStyles.module.scss'

const SingleAnswer: React.FC<AnswersProps> = ({ questionId }) => {
   const dispatch = useDispatch()

   const options = useSelector((state: RootState) => selectOptions(state, questionId!))
   const questions = useSelector((state: RootState) => selectQuestions(state))
   const selectedRadioOption = questions.find((q: any) => q.id === questionId)?.selectedRadioOption

   const removeOptionHandler = (optionId: number) => {
      if (questionId !== undefined) {
         dispatch(removeOption({ questionId, optionId }))
      }
   }

   const addOptionHandler = () => {
      if (questionId !== undefined) {
         dispatch(addOption({ questionId }))
      }
   }

   const updateOptionHandler = (optionId: number, value: string) => {
      if (questionId !== undefined) {
         dispatch(updateOption({ questionId, optionId, value }))
      }
   }

   const selectRadioOptionHandler = (optionId: number) => {
      if (questionId !== undefined) {
         dispatch(setSelectedRadioOption({ questionId, optionId }))
      }
   }

   return (
      <div className={s.answers}>
         {options.map((option) => (
            <div className={s.option} key={option.id}>
               <label className={s.labelRadio}>
                  <input
                     type="radio"
                     name={`option_${questionId}`}
                     value={option.id}
                     checked={selectedRadioOption === option.id}
                     onChange={() => selectRadioOptionHandler(option.id)}
                     className={s.realRadio}
                  />

                  <span className={s.customRadio}></span>
               </label>

               <QuestionOptionInput
                  placeholder="Введіть варіант відповіді"
                  value={option.value}
                  onChange={(e) => updateOptionHandler(option.id, e.target.value)}
               />

               <button type="button" onClick={() => removeOptionHandler(option.id)}>
                  <Image
                     src="./icons/delete-option-icon.svg"
                     alt="Delete option"
                     width={24}
                     height={24}
                  />
               </button>
            </div>
         ))}

         <button type="button" className={s.addButton} onClick={addOptionHandler}>
            <Image src="./icons/add-icon.svg" alt="Add option" width={32} height={32} />
         </button>
      </div>
   )
}

export default SingleAnswer
