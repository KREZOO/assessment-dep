export interface QuestionScoreCounterProps {
   questionId: number
}

export interface AnswerScoreCounterProps {
   questionId: number | undefined
   optionId: number
   maxScore?: number
}
