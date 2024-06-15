'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { FormProvider, useForm } from 'react-hook-form'

import { selectQuestions, addQuestion, loadState } from '@/store/slices/createTaskSlice'

import Header from '@/components/header'
import OperationsPanel from '@/components/operationsPanel'
import TopicInput from '@/components/topicInput'
import DescriptionInput from '@/components/descriptionInput'
import Question from '@/components/question'
import Footer from '@/components/footer'

import globS from '@/styles/global.module.scss'
import locS from '@/styles/pages/createSurveyPageStyles.module.scss'

const CreateSurvey = () => {
   const questions = useSelector(selectQuestions)
   const dispatch = useDispatch()

   const methods = useForm()

   useEffect(() => {
      dispatch(loadState())
   }, [dispatch])

   return (
      <>
         <Header />

         <main className={`${globS.container_1100} ${locS.main}`}>
            <FormProvider {...methods}>
               <form className={locS.form}>
                  <OperationsPanel />
                  <div className={globS.mb_25}></div>

                  <TopicInput />
                  <DescriptionInput height={100} />
                  <div className={globS.mb_20}></div>

                  {questions.map((question) => (
                     <Question key={question.id} id={question.id} />
                  ))}

                  <button type="button" onClick={() => dispatch(addQuestion())}>
                     <Image
                        src="./icons/add-icon.svg"
                        alt="Add question icon"
                        width={50}
                        height={50}
                     />
                  </button>
               </form>
            </FormProvider>
         </main>

         <Footer />
      </>
   )
}

export default CreateSurvey
