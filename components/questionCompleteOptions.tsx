import { QuestionCompleteOptionsProps } from '@/types/questionCompleteOptionsProps'

import s from '@/styles/components/questionCompleteOptionsStyles.module.scss'

const QuestionCompleteOptions: React.FC<QuestionCompleteOptionsProps> = ({
   type,
   questionId,
   options
}) => {
   return (
      <div className={s.options}>
         <div className={s.radioContainer}>
            {type === 'radio' &&
               Array.isArray(options) &&
               options.map((option) => (
                  <label className={s.labelRadio} key={option.id}>
                     <input
                        type="radio"
                        className={s.realRadio}
                        value={option.value}
                        name={`radios_group[${questionId}]`}
                     />
                     <span className={s.customRadio}></span>

                     {option.value}
                  </label>
               ))}
         </div>

         <div className={s.checkboxContainer}>
            {type === 'checkbox' &&
               Array.isArray(options) &&
               options.map((option) => (
                  <label className={s.labelCheckbox} key={option.id}>
                     <input
                        type="checkbox"
                        className={s.realCheckbox}
                        value={option.value}
                        name={`checkboxes_group[${questionId}]`}
                     />
                     <span className={s.customCheckbox}></span>

                     {option.value}
                  </label>
               ))}
         </div>

         {type === 'textarea' && (
            <textarea
               placeholder="Введіть відповідь..."
               className={s.textarea}
               spellCheck="false"
            ></textarea>
         )}
      </div>
   )
}

export default QuestionCompleteOptions
