'use client'

import { FormProvider, useForm } from 'react-hook-form'

import Header from '@/components/header'
import QuestionTitle from '@/components/questionTitle'
import QuestionDescription from '@/components/questionDescription'
import QuestionComplete from '@/components/questionComplete'
import Footer from '@/components/footer'

import { mockedCompleteTasks } from '@/mocked/completeTasks'

import globS from '@/styles/global.module.scss'
import locS from '@/styles/pages/completeTaskPageStyles.module.scss'

const CompleteTask = () => {
   const methods = useForm()

   const onSubmit = (data: any) => {
      alert(JSON.stringify(data))
   }

   return (
      <>
         <Header />

         <main className={`${globS.container_1100} ${locS.main}`}>
            <FormProvider {...methods}>
               <form className={locS.form}>
                  <QuestionTitle title={mockedCompleteTasks[0].title} />
                  <QuestionDescription description={mockedCompleteTasks[0].description} />
                  <div className={globS.mb_20}></div>

                  {mockedCompleteTasks[0].questions.map((question) => (
                     <QuestionComplete
                        key={question.id}
                        id={question.id}
                        title={question.title}
                        type={question.type}
                        options={question.options}
                     />
                  ))}

                  <button
                     type="submit"
                     className={locS.button}
                     onClick={methods.handleSubmit(onSubmit)}
                  >
                     Надіслати
                  </button>
               </form>
            </FormProvider>
         </main>

         <Footer />
      </>
   )
}

export default CompleteTask
