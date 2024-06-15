import { QuestionCompleteProps } from '@/types/questionCompleteProps'

import QuestionCompleteOptions from './questionCompleteOptions'

import s from '@/styles/components/questionCompleteStyles.module.scss'

const QuestionComplete: React.FC<QuestionCompleteProps> = ({ id, title, type, options }) => {
   return (
      <div className={s.question}>
         <header className={s.header}>Питання №{id}</header>

         <h2 className={s.title}>{title}</h2>

         <QuestionCompleteOptions type={type} questionId={id} options={options} />
      </div>
   )
}

export default QuestionComplete
