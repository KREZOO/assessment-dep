import { QuestionInputProps } from '@/types/questionInputProps'
import s from '@/styles/components/questionInputStyles.module.scss'

const QuestionOptionInput: React.FC<QuestionInputProps> = ({ placeholder, value, onChange }) => {
   return (
      <input
         type="text"
         className={`${s.input} ${s.small}`}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
         spellCheck="false"
         required
      />
   )
}

export default QuestionOptionInput
