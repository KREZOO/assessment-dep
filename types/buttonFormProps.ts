export interface ButtonFormProps {
   type: 'button' | 'submit' | 'reset' | undefined
   label: string
   onClick?: () => void
}
