export interface Option {
   id: number
   value: string
}

export interface QuestionCompleteProps {
   id: number
   title: string
   type: string
   options: Option[] | { id: number; value: string }
}
