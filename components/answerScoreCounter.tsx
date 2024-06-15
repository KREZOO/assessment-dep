import Image from 'next/image'
import { RootState } from '@/store/store'
import { useDispatch, useSelector } from 'react-redux'
import {
   incrementOptionScore,
   decrementOptionScore,
   selectOptionScore
} from '@/store/slices/questionCountersSlice'

import { AnswerScoreCounterProps } from '@/types/questionScoreCountersProps'

import s from '@/styles/components/answerScoreCounterStyles.module.scss'

const AnswerScoreCounter: React.FC<AnswerScoreCounterProps> = ({ questionId, optionId }) => {
   const dispatch = useDispatch()
   const score = useSelector((state: RootState) =>
      selectOptionScore(state, questionId as number, optionId)
   )

   const decrementScore = () => {
      dispatch(decrementOptionScore({ questionId: Number(questionId), optionId }))
   }

   const incrementScore = () => {
      dispatch(incrementOptionScore({ questionId: Number(questionId), optionId }))
   }

   return (
      <div className={s.answerScoreCounter}>
         {score}

         <div className={s.buttons}>
            <button
               type="button"
               className={`${s.button} ${s.buttonIncrement}`}
               onClick={incrementScore}
            >
               <Image src="./icons/increment-icon.svg" alt="Plus" width={12} height={12} />
            </button>

            <button
               type="button"
               className={`${s.button} ${s.buttonDecrement}`}
               onClick={decrementScore}
            >
               <Image src="./icons/decrement-icon.svg" alt="Minus" width={12} height={12} />
            </button>
         </div>
      </div>
   )
}

export default AnswerScoreCounter
