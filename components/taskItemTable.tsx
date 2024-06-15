import Image from 'next/image'
import Link from 'next/link'

import DropdownMenu from './dropdownMenu'

import { TaskItemProps } from '@/types/taskItemProps'

import s from '@/styles/components/taskItemStyles.module.scss'

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
   return (
      <div className={s.taskItemForTable}>
         <Link href={`/tasks/${task.id}`}>
            <Image src={task.image} alt="Task" className={s.image} width={200} height={190} />
         </Link>

         <div className={s.description}>
            <div className={s.divider}>
               <p>{task.type}</p>
               <p>{task.createdAt}</p>
            </div>

            <DropdownMenu />
         </div>
      </div>
   )
}

export default TaskItem
