interface ErrorMessages {
   required: string
   minLength?: string
   pattern?: string
   validate?: string
}

export interface InputFormProps {
   type: string
   label: string
   placeholder: string
   name: string
   icon: string
   required: boolean
   minLength?: number
   pattern?: RegExp
   validate?: (value: string) => boolean | string | undefined
   errorMessages?: ErrorMessages
}
