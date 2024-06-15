import { useEffect, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectDescription, setDescription, loadState } from '@/store/slices/createTaskSlice'

import { DescriptionInputProps } from '@/types/descriptionInputProps'

import s from '@/styles/components/descriptionInputStyles.module.scss'

const DescriptionInput: React.FC<DescriptionInputProps> = ({ height }) => {
   const selectedDescription = useSelector(selectDescription)
   const dispatch = useDispatch()

   const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(setDescription(e.target.value))
   }

   useEffect(() => {
      dispatch(loadState())
   }, [dispatch])

   return (
      <textarea
         value={selectedDescription}
         onChange={handleTextareaChange}
         placeholder="Додайте опис..."
         className={s.textarea}
         style={{ height: height }}
         required
      />
   )
}

export default DescriptionInput
