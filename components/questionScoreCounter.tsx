import Image from 'next/image'
import { RootState } from '@/store/store'
import { useDispatch, useSelector } from 'react-redux'
import {
   incrementQuestionScore,
   decrementQuestionScore,
   selectQuestionScore
} from '@/store/slices/questionCountersSlice'

import { QuestionScoreCounterProps } from '@/types/questionScoreCountersProps'

import s from '@/styles/components/questionScoreCounterStyles.module.scss'

const QuestionScoreCounter: React.FC<QuestionScoreCounterProps> = ({ questionId }) => {
   const dispatch = useDispatch()
   const score = useSelector((state: RootState) => selectQuestionScore(state, questionId))

   const decrementScore = () => {
      dispatch(decrementQuestionScore(questionId))
   }

   const incrementScore = () => {
      dispatch(incrementQuestionScore(questionId))
   }

   return (
      <div className={s.questionScoreCounter}>
         <div className={s.count}>
            {score}

            <div className={s.buttons}>
               <button
                  type="button"
                  className={`${s.button} ${s.buttonIncrement}`}
                  onClick={incrementScore}
               >
                  <Image src="/icons/increment-icon.svg" alt="Plus" width={12} height={12} />
               </button>

               <button
                  type="button"
                  className={`${s.button} ${s.buttonDecrement}`}
                  onClick={decrementScore}
               >
                  <Image src="/icons/decrement-icon.svg" alt="Minus" width={12} height={12} />
               </button>
            </div>
         </div>

         <span>бали</span>
      </div>
   )
}

export default QuestionScoreCounter
