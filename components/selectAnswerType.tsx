import { useEffect } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedOption, selectSelectedOption, loadState } from '@/store/slices/createTaskSlice'
import { resetOptionCounter } from '@/store/slices/questionCountersSlice'
import { RootState } from '@/store/store'
import { Listbox } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'

import { SelectAnswerTypeProps } from '@/types/selectAnswerTypeProps'

import { answerOptions, AnswerOptionsType } from '@/public/options/optionsText'

import s from '@/styles/components/selectAnswerTypeStyles.module.scss'

const SelectAnswerType: React.FC<SelectAnswerTypeProps> = ({ questionId }) => {
   const dispatch = useDispatch()
   const selectedOption = useSelector((state: RootState) => selectSelectedOption(state, questionId))

   const handleOptionChange = (option: AnswerOptionsType) => {
      dispatch(setSelectedOption({ questionId, option }))
      dispatch(resetOptionCounter({ questionId, optionId: option.id }))
   }

   useEffect(() => {
      dispatch(loadState())
   }, [dispatch])

   return (
      <Listbox value={selectedOption} onChange={handleOptionChange}>
         {({ open }) => (
            <div className={s.container}>
               <Listbox.Button
                  className={`${s.listboxButton} ${open ? s.open : ''} 
                  ${selectedOption && selectedOption.id !== 0 ? s.selectedButton : ''}`}
               >
                  {selectedOption && (
                     <>
                        {selectedOption.name}

                        <Image
                           src="/icons/arrow-down-icon.svg"
                           alt="Arrow down"
                           width={16}
                           height={16}
                           className={s.arrowButtonIcon}
                        />
                     </>
                  )}
               </Listbox.Button>
               <AnimatePresence>
                  {open && (
                     <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                     >
                        <Listbox.Options className={s.listboxOptions} static>
                           {answerOptions.slice(1).map((option) => (
                              <Listbox.Option key={option.id} value={option}>
                                 {({ active, selected }) => (
                                    <div
                                       onClick={() => handleOptionChange(option)}
                                       className={`
                                          ${s.listboxOption}
                                          ${active ? s.active : ''}
                                       `}
                                    >
                                       {option.icon && (
                                          <Image
                                             src={option.icon}
                                             alt={option.name}
                                             width={16}
                                             height={16}
                                             className={s.optionIcon}
                                          />
                                       )}

                                       {option.name}

                                       {selected && (
                                          <Image
                                             src="/icons/checkmark-icon.svg"
                                             alt="Checkmark"
                                             width={16}
                                             height={16}
                                             className={s.checkmarkIcon}
                                          />
                                       )}
                                    </div>
                                 )}
                              </Listbox.Option>
                           ))}
                        </Listbox.Options>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         )}
      </Listbox>
   )
}

export default SelectAnswerType
