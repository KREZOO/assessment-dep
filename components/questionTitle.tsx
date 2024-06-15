import { QuestionTitleProps } from '@/types/questionTitleProps'

import s from '@/styles/components/questionTitleStyles.module.scss'

const QuestionTitle: React.FC<QuestionTitleProps> = ({ title }) => {
   return <h1 className={s.title}>{title}</h1>
}

export default QuestionTitle
