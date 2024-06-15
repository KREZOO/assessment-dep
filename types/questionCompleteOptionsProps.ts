import { Option } from './questionCompleteProps'

export interface QuestionCompleteOptionsProps {
   type: string
   questionId: number
   options: Option[] | { id: number; value: string }
}
