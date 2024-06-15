import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/store'

interface Option {
   id: number
   value: string
}

interface AnswersType {
   id: number
   name: string
}

interface Question {
   id: number
   titleInputValue: string
   selectedOption: AnswersType
   detailedAnswerTextareaValue: string
   options: Option[]
   selectedRadioOption: number
   selectedCheckboxes: number[]
}

interface createTaskState {
   topic: string
   description: string
   questions: Question[]
}

const initialState: createTaskState = {
   topic: '',
   description: '',
   questions: [
      {
         id: 1,
         titleInputValue: '',
         selectedOption: { id: 0, name: 'Виберіть тип відповіді' },
         detailedAnswerTextareaValue: '',
         options: [
            { id: 1, value: '' },
            { id: 2, value: '' },
            { id: 3, value: '' }
         ],
         selectedRadioOption: 0,
         selectedCheckboxes: []
      }
   ]
}

export const createTaskSlice = createSlice({
   name: 'createTask',
   initialState,
   reducers: {
      setTopic(state, action) {
         state.topic = action.payload
         localStorage.setItem('topic', action.payload)
      },

      setDescription(state, action) {
         state.description = action.payload
         localStorage.setItem('description', action.payload)
      },

      addQuestion(state) {
         const newId = state.questions.length + 1
         state.questions.push({
            id: newId,
            titleInputValue: '',
            selectedOption: { id: 0, name: 'Виберіть тип відповіді' },
            detailedAnswerTextareaValue: '',
            options: [
               { id: 1, value: '' },
               { id: 2, value: '' },
               { id: 3, value: '' }
            ],
            selectedRadioOption: 0,
            selectedCheckboxes: []
         })
         localStorage.setItem('questions', JSON.stringify(state.questions))
      },

      duplicateQuestion(state, action: PayloadAction<number>) {
         const questionId = action.payload
         const indexToDuplicate = state.questions.findIndex((q) => q.id === questionId)

         if (indexToDuplicate !== -1) {
            const questionToDuplicate = state.questions[indexToDuplicate]

            const newQuestionId = state.questions.length + 1

            const duplicatedQuestion: Question = {
               ...questionToDuplicate,
               id: newQuestionId,
               selectedOption: { ...questionToDuplicate.selectedOption },
               options: questionToDuplicate.options.map((option) => ({ ...option })),
               selectedCheckboxes: [...questionToDuplicate.selectedCheckboxes]
            }

            state.questions.push(duplicatedQuestion)

            localStorage.setItem('questions', JSON.stringify(state.questions))
         }
      },

      removeQuestion(state, action) {
         const questionId = action.payload
         state.questions = state.questions.filter((q) => q.id !== questionId)
         state.questions.forEach((q, index) => {
            q.id = index + 1
         })

         localStorage.setItem('questions', JSON.stringify(state.questions))
      },

      setQuestionTitleInputValue(
         state,
         action: PayloadAction<{ questionId: number; value: string }>
      ) {
         const { questionId, value } = action.payload
         const question = state.questions.find((q) => q.id === questionId)
         if (question) {
            question.titleInputValue = value
            localStorage.setItem('questions', JSON.stringify(state.questions))
         }
      },

      setSelectedOption(state, action) {
         const { questionId, option } = action.payload
         const questionIndex = state.questions.findIndex((q) => q.id === questionId)
         if (questionIndex !== -1) {
            state.questions[questionIndex].selectedOption = option
            state.questions[questionIndex].options = state.questions[questionIndex].options.slice(
               0,
               3
            )
            while (state.questions[questionIndex].options.length < 3) {
               const newId = state.questions[questionIndex].options.length + 1
               state.questions[questionIndex].options.push({
                  id: newId,
                  value: ''
               })
            }
            state.questions[questionIndex].selectedCheckboxes = []
            state.questions[questionIndex].selectedRadioOption = 0
            localStorage.setItem('questions', JSON.stringify(state.questions))
         }
      },

      addOption(state, action: PayloadAction<{ questionId: number }>) {
         const { questionId } = action.payload
         const question = state.questions.find((q) => q.id === questionId)
         if (question) {
            const newId = question.options.length + 1
            question.options.push({ id: newId, value: '' })
            localStorage.setItem('questions', JSON.stringify(state.questions))
         }
      },

      updateOption(
         state,
         action: PayloadAction<{ questionId: number; optionId: number; value: string }>
      ) {
         const { questionId, optionId, value } = action.payload
         const question = state.questions.find((q) => q.id === questionId)
         if (question) {
            const option = question.options.find((o) => o.id === optionId)
            if (option) {
               option.value = value
               localStorage.setItem('questions', JSON.stringify(state.questions))
            }
         }
      },

      removeOption(state, action: PayloadAction<{ questionId: number; optionId: number }>) {
         const { questionId, optionId } = action.payload
         const question = state.questions.find((q) => q.id === questionId)
         if (question) {
            question.options = question.options.filter((o) => o.id !== optionId)
            if (question.selectedCheckboxes.includes(optionId)) {
               question.selectedCheckboxes = question.selectedCheckboxes.filter(
                  (id) => id !== optionId
               )
            }
            localStorage.setItem('questions', JSON.stringify(state.questions))
         }
      },

      setDetailedAnswerTextareaValue(
         state,
         action: PayloadAction<{ questionId: number; value: string }>
      ) {
         const { questionId, value } = action.payload
         const question = state.questions.find((q) => q.id === questionId)
         if (question) {
            question.detailedAnswerTextareaValue = value
            localStorage.setItem('questions', JSON.stringify(state.questions))
         }
      },

      setSelectedRadioOption(
         state,
         action: PayloadAction<{ questionId: number; optionId: number }>
      ) {
         const { questionId, optionId } = action.payload
         const question = state.questions.find((q) => q.id === questionId)
         if (question) {
            question.selectedRadioOption = optionId
            localStorage.setItem('questions', JSON.stringify(state.questions))
         }
      },

      setSelectedCheckboxes(
         state,
         action: PayloadAction<{ questionId: number; selectedCheckboxes: number[] }>
      ) {
         const { questionId, selectedCheckboxes } = action.payload
         const question = state.questions.find((q) => q.id === questionId)
         if (question) {
            question.selectedCheckboxes = selectedCheckboxes
            localStorage.setItem('questions', JSON.stringify(state.questions))
         }
      },

      loadState(state) {
         const savedTopic = localStorage.getItem('topic')
         if (savedTopic !== null) {
            state.topic = savedTopic
         }

         const savedDescription = localStorage.getItem('description')
         if (savedDescription !== null) {
            state.description = savedDescription
         }

         const savedQuestions = localStorage.getItem('questions')
         if (savedQuestions !== null) {
            state.questions = JSON.parse(savedQuestions)
         }
      }
   }
})

export const {
   setTopic,
   setDescription,
   addQuestion,
   duplicateQuestion,
   removeQuestion,
   setSelectedOption,
   setSelectedRadioOption,
   setQuestionTitleInputValue,
   setDetailedAnswerTextareaValue,
   setSelectedCheckboxes,
   addOption,
   removeOption,
   updateOption,
   loadState
} = createTaskSlice.actions

export const selectTopic = (state: RootState) => state.createTask.topic
export const selectDescription = (state: RootState) => state.createTask.description
export const selectQuestions = (state: RootState) => state.createTask.questions

export const selectSelectedOption = (state: RootState, questionId: number) => {
   const question = state.createTask.questions.find((q) => q.id === questionId)
   if (question) {
      return question.selectedOption
   } else {
      return { id: 0, name: 'Виберіть тип відповіді' }
   }
}

export const selectQuestionTitleInputValue = (state: RootState, questionId: number) => {
   const question = state.createTask.questions.find((q) => q.id === questionId)
   return question ? question.titleInputValue : ''
}

export const selectDetailedAnswerTextareaValue = (state: RootState, questionId: number) => {
   const question = state.createTask.questions.find((q) => q.id === questionId)
   return question ? question.detailedAnswerTextareaValue : ''
}

export const selectOptions = (state: RootState, questionId: number) => {
   const question = state.createTask.questions.find((q) => q.id === questionId)
   return question ? question.options : []
}

export const selectSelectedCheckboxes = (state: RootState, questionId: number) => {
   const question = state.createTask.questions.find((q) => q.id === questionId)
   return question ? question.selectedCheckboxes : []
}

export default createTaskSlice.reducer
