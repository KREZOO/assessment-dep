import Image from 'next/image'
import Link from 'next/link'

import DropdownMenu from './dropdownMenu'

import { TaskItemProps } from '@/types/taskItemProps'

import s from '@/styles/components/taskItemStyles.module.scss'

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
   return (
      <div className={s.taskItemForList}>
         <Link href={`/tasks/${task.id}`}>
            <Image src={task.image} alt="Task" className={s.image} width={100} height={100} />
         </Link>

         <p>{task.title}</p>
         <p>{task.createdAt}</p>
         <p>{task.owner}</p>

         <DropdownMenu />
      </div>
   )
}

export default TaskItem
