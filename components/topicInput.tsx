import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'

import { selectTopic, setTopic } from '@/store/slices/createTaskSlice'

import s from '@/styles/components/topicInputStyles.module.scss'

const TopicInput: React.FC = () => {
   const selectedTopic = useSelector(selectTopic)
   const dispatch = useDispatch()

   const inputRef = useRef<HTMLInputElement>(null)

   const handleSaveTopic = () => {
      if (inputRef.current) {
         const topic = inputRef.current.value
         dispatch(setTopic(topic))
      }
   }

   useEffect(() => {
      if (inputRef.current) {
         inputRef.current.value = selectedTopic
      }
   }, [selectedTopic])

   return (
      <div className={s.container}>
         <input
            ref={inputRef}
            type="text"
            name="topic"
            placeholder="Введіть тему"
            className={s.input}
            autoComplete="off"
            required
         />

         <button type="button" className={s.button} onClick={handleSaveTopic}>
            <Image src="./icons/dropdown/edit-icon.svg" alt="Edit" width={40} height={40} />
         </button>
      </div>
   )
}

export default TopicInput
