import { QuestionDescriptionProps } from '@/types/questionDescriptionProps'

import s from '@/styles/components/questionDescriptionStyles.module.scss'

const QuestionDescription: React.FC<QuestionDescriptionProps> = ({ description }) => {
   return <div className={s.description}>{description}</div>
}

export default QuestionDescription
