import { useEffect } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import {
   selectSelectedOption,
   setDetailedAnswerTextareaValue,
   selectDetailedAnswerTextareaValue,
   duplicateQuestion,
   removeQuestion
} from '@/store/slices/createTaskSlice'
import { loadState, resetCountersForQuestionId } from '@/store/slices/questionCountersSlice'

import QuestionTitleInput from './questionTitleInput'
import SelectAnswerType from './selectAnswerType'
import SingleAnswer from './singleAnswer'
import SomeAnswers from './someAnswers'
import QuestionScoreCounter from './questionScoreCounter'

import { QuestionProps } from '@/types/questionProps'

import s from '@/styles/components/questionStyles.module.scss'

const Question: React.FC<QuestionProps> = ({ id }) => {
   const dispatch = useDispatch()
   const selectedOption = useSelector((state: RootState) => selectSelectedOption(state, id))
   const savedTextareaValue = useSelector((state: RootState) =>
      selectDetailedAnswerTextareaValue(state, id)
   )

   const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.target
      dispatch(
         setDetailedAnswerTextareaValue({
            questionId: id,
            value
         })
      )
   }

   useEffect(() => {
      dispatch(loadState())
   }, [dispatch, id, savedTextareaValue])

   return (
      <div className={s.question}>
         <header className={s.header}>Питання №{id}</header>

         <div className={s.questionEntry}>
            <QuestionTitleInput placeholder="Введіть питання" questionId={id} />

            <SelectAnswerType questionId={id} />

            <div className={s.answers}>
               {selectedOption.id === 1 && (
                  <textarea
                     className={s.detailedAnswer}
                     placeholder="Введіть відповідь..."
                     value={savedTextareaValue}
                     onChange={handleInputChange}
                     spellCheck="false"
                     required
                  ></textarea>
               )}

               {selectedOption.id === 2 && <SingleAnswer questionId={id} />}

               {selectedOption.id === 3 && <SomeAnswers questionId={id} />}
            </div>
         </div>

         <footer className={s.footer}>
            <QuestionScoreCounter questionId={id} />

            <div className={s.buttons}>
               <button type="button" className={s.button}>
                  <Image
                     src="/icons/description-icon.svg"
                     alt="Description"
                     width={16}
                     height={16}
                  />
                  Додати опис
               </button>

               <button
                  type="button"
                  className={s.button}
                  onClick={() => dispatch(duplicateQuestion(id))}
               >
                  <Image src="/icons/duplicate-icon.svg" alt="Duplicate" width={16} height={16} />
                  Дублювати
               </button>

               <button
                  type="button"
                  className={s.button}
                  onClick={() => {
                     dispatch(removeQuestion(id))
                     dispatch(resetCountersForQuestionId(id))
                  }}
               >
                  <Image src="/icons/delete-icon.svg" alt="Delete" width={16} height={16} />
                  Видалити
               </button>
            </div>
         </footer>
      </div>
   )
}

export default Question
