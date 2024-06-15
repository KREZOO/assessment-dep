import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
   setQuestionTitleInputValue,
   selectQuestionTitleInputValue,
   loadState
} from '@/store/slices/createTaskSlice'

import { QuestionInputProps } from '@/types/questionInputProps'

import s from '@/styles/components/questionInputStyles.module.scss'

const QuestionTitleInput: React.FC<QuestionInputProps> = ({ placeholder, questionId }) => {
   const dispatch = useDispatch()

   const savedInputValue = useSelector((state: any) =>
      selectQuestionTitleInputValue(state, questionId as number)
   )

   useEffect(() => {
      dispatch(loadState())
   }, [dispatch])

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value: titleInputValue } = event.target
      dispatch(
         setQuestionTitleInputValue({ questionId: Number(questionId), value: titleInputValue })
      )
   }

   return (
      <input
         type="text"
         className={`${s.input} ${s.large}`}
         placeholder={placeholder}
         value={savedInputValue}
         onChange={handleInputChange}
         spellCheck="false"
         required
      />
   )
}

export default QuestionTitleInput
