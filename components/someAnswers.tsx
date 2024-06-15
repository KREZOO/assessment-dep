import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import {
   addOption,
   removeOption,
   updateOption,
   setSelectedCheckboxes,
   selectSelectedCheckboxes,
   selectOptions
} from '@/store/slices/createTaskSlice'
import { resetOptionCounter } from '@/store/slices/questionCountersSlice'

import QuestionOptionInput from './questionOptionInput'
import AnswerScoreCounter from './answerScoreCounter'

import { AnswersProps } from '@/types/answersProps'

import s from '@/styles/components/answersStyles.module.scss'

const SomeAnswers: React.FC<AnswersProps> = ({ questionId }) => {
   const dispatch = useDispatch()

   const options = useSelector((state: RootState) => selectOptions(state, questionId!))

   const selectedCheckboxes = useSelector((state: RootState) =>
      selectSelectedCheckboxes(state, questionId!)
   )

   const addOptionHandler = () => {
      if (questionId !== undefined) {
         dispatch(addOption({ questionId }))
      }
   }

   const removeOptionHandler = (optionId: number) => {
      if (questionId !== undefined) {
         dispatch(removeOption({ questionId, optionId }))
         dispatch(resetOptionCounter({ questionId, optionId }))
      }
   }

   const updateOptionHandler = (optionId: number, value: string) => {
      if (questionId !== undefined) {
         dispatch(updateOption({ questionId, optionId, value }))
      }
   }

   const checkboxChangeHandler = (optionId: number, isChecked: boolean) => {
      if (questionId !== undefined) {
         const updatedCheckboxes = isChecked
            ? [...(selectedCheckboxes || []), optionId]
            : selectedCheckboxes.filter((id) => id !== optionId)

         dispatch(setSelectedCheckboxes({ questionId, selectedCheckboxes: updatedCheckboxes }))
      }
   }

   return (
      <div className={s.answers}>
         {options.map((option) => (
            <div className={s.option} key={option.id}>
               <label className={s.labelCheckbox}>
                  <input
                     type="checkbox"
                     className={s.realCheckbox}
                     checked={selectedCheckboxes && selectedCheckboxes.includes(option.id)}
                     onChange={(e) => checkboxChangeHandler(option.id, e.target.checked)}
                  />
                  <span className={s.customCheckbox}></span>
               </label>

               <QuestionOptionInput
                  placeholder="Введіть варіант відповіді"
                  value={option.value}
                  onChange={(e) => updateOptionHandler(option.id, e.target.value)}
               />

               <AnswerScoreCounter questionId={questionId} optionId={option.id} />

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
            <Image src="/icons/add-icon.svg" alt="Add option" width={32} height={32} />
         </button>
      </div>
   )
}

export default SomeAnswers
