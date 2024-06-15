export interface AnswerOptionsType {
   id: number
   name: string
   icon?: string
}

export const answerOptions: AnswerOptionsType[] = [
   { id: 0, name: 'Виберіть тип відповіді' },
   { id: 1, name: 'З розгорнутою відповідю', icon: '/icons/textaria-icon.svg' },
   { id: 2, name: 'З варіантом відповіді', icon: '/icons/radiobutton-icon.svg' },
   { id: 3, name: 'Декілька варіантів відповіді', icon: '/icons/checkbox-icon.svg' }
]

export const listSortOptions = [
   { name: 'За назвою', sortProperty: 'title' },
   { name: 'За датою', sortProperty: 'date' }
]
