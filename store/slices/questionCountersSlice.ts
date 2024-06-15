import { createSlice, createAction } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/store'

interface QuestionCounterState {
   questionId: number
   score: number
}

interface OptionCounterState {
   questionId: number
   optionId: number
   score: number
}

interface CounterState {
   questionCounters: QuestionCounterState[]
   optionCounters: OptionCounterState[]
}

const initialState: CounterState = {
   questionCounters: [],
   optionCounters: []
}

const questionCounterSlice = createSlice({
   name: 'counter',
   initialState,
   reducers: {
      incrementQuestionScore(state, action: PayloadAction<number>) {
         const { payload: questionId } = action
         const counter = state.questionCounters.find((c) => c.questionId === questionId)
         if (counter) {
            counter.score++
         } else {
            state.questionCounters.push({ questionId, score: 1 })
         }
         localStorage.setItem('questionCounters', JSON.stringify(state.questionCounters))
      },

      decrementQuestionScore(state, action: PayloadAction<number>) {
         const { payload: questionId } = action
         const counter = state.questionCounters.find((c) => c.questionId === questionId)
         if (counter && counter.score > 0) {
            counter.score--
         }
         localStorage.setItem('questionCounters', JSON.stringify(state.questionCounters))
      },

      incrementOptionScore(state, action: PayloadAction<{ questionId: number; optionId: number }>) {
         const { questionId, optionId } = action.payload
         const questionCounter = state.questionCounters.find((c) => c.questionId === questionId)
         if (questionCounter && questionCounter.score > 0) {
            const optionCounter = state.optionCounters.find(
               (c) => c.questionId === questionId && c.optionId === optionId
            )
            if (optionCounter) {
               if (optionCounter.score < questionCounter.score) {
                  optionCounter.score++
               }
            } else {
               state.optionCounters.push({ questionId, optionId, score: 1 })
            }
            localStorage.setItem('optionCounters', JSON.stringify(state.optionCounters))
         }
      },

      decrementOptionScore(state, action: PayloadAction<{ questionId: number; optionId: number }>) {
         const { questionId, optionId } = action.payload
         const optionCounterIndex = state.optionCounters.findIndex(
            (c) => c.questionId === questionId && c.optionId === optionId
         )
         if (optionCounterIndex !== -1) {
            const optionCounter = state.optionCounters[optionCounterIndex]
            if (optionCounter.score > 0) {
               optionCounter.score--
               if (optionCounter.score === 0) {
                  state.optionCounters.splice(optionCounterIndex, 1)
               }
               localStorage.setItem('optionCounters', JSON.stringify(state.optionCounters))
            }
         }
      },

      resetCountersForQuestionId(state, action) {
         const questionId = action.payload
         state.questionCounters = state.questionCounters.filter(
            (counter) => counter.questionId !== questionId
         )
         state.optionCounters = state.optionCounters.filter(
            (counter) => counter.questionId !== questionId
         )
         localStorage.setItem('questionCounters', JSON.stringify(state.questionCounters))
         localStorage.setItem('optionCounters', JSON.stringify(state.optionCounters))
      },

      resetOptionCounter(state, action: PayloadAction<{ questionId: number; optionId: number }>) {
         const { questionId, optionId } = action.payload
         state.optionCounters = state.optionCounters.filter(
            (counter) => !(counter.questionId === questionId && counter.optionId === optionId)
         )
         localStorage.setItem('optionCounters', JSON.stringify(state.optionCounters))
      },

      loadState(state) {
         const questionCountersData = localStorage.getItem('questionCounters')
         if (questionCountersData) {
            state.questionCounters = JSON.parse(questionCountersData)
         }

         const optionCountersData = localStorage.getItem('optionCounters')
         if (optionCountersData) {
            state.optionCounters = JSON.parse(optionCountersData)
         }
      }
   }
})

export const {
   incrementQuestionScore,
   decrementQuestionScore,
   incrementOptionScore,
   decrementOptionScore,
   resetCountersForQuestionId,
   resetOptionCounter,
   loadState
} = questionCounterSlice.actions

export const selectQuestionScore = (state: RootState, questionId: number) => {
   const counter = state.questionCounters.questionCounters.find((c) => c.questionId === questionId)
   return counter ? counter.score : 0
}

export const selectOptionScore = (state: RootState, questionId: number, optionId: number) => {
   const counter = state.questionCounters.optionCounters.find(
      (c) => c.questionId === questionId && c.optionId === optionId
   )
   return counter ? counter.score : 0
}

export default questionCounterSlice.reducer
