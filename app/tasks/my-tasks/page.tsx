'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { selectListMode, setListMode, loadListMode } from '@/store/slices/listModeSlice'

import Header from '@/components/header'
import TaskItemList from '@/components/taskItemList'
import TaskItemTable from '@/components/taskItemTable'
import DropdownSort from '@/components/dropdownSort'
import Footer from '@/components/footer'

import { tasks } from '@/mocked/tasks'

import globS from '@/styles/global.module.scss'
import locS from '@/styles/pages/myTasksPageStyles.module.scss'

const MyTasks = () => {
   const [isOpen, setIsOpen] = useState(false)
   const selectedListMode = useSelector(selectListMode)
   const dispatch = useDispatch()

   const menuRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      dispatch(loadListMode())
   }, [dispatch])

   useEffect(() => {
      const closeMenu = (event: MouseEvent) => {
         if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false)
         }
      }

      if (isOpen) {
         document.addEventListener('click', closeMenu)
      } else {
         document.removeEventListener('click', closeMenu)
      }

      return () => {
         document.removeEventListener('click', closeMenu)
      }
   }, [isOpen])

   return (
      <>
         <Header />

         <main className={locS.main}>
            <div className={globS.container_1100}>
               {selectedListMode ? (
                  <div className={locS.listWrap}>
                     <div className={locS.listHeader}>
                        <p>Останні завдання</p>
                        <p>Назва</p>
                        <p>Дата створення</p>
                        <p>Власник</p>

                        <div className={locS.modes}>
                           <button onClick={() => dispatch(setListMode(false))}>
                              <Image
                                 src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/icons/table-icon.svg`}
                                 width={40}
                                 height={40}
                                 alt="mode table"
                              />
                           </button>

                           <button onClick={() => dispatch(setListMode(true))}>
                              <Image
                                 src="./icons/list-icon.svg"
                                 width={40}
                                 height={40}
                                 alt="mode list"
                              />
                           </button>

                           <DropdownSort />
                        </div>
                     </div>

                     {tasks.map((task) => (
                        <TaskItemList key={task.id} task={task} />
                     ))}
                  </div>
               ) : (
                  <div className={locS.tableWrap}>
                     <div className={locS.tableHeader}>
                        <p>Останні завдання</p>

                        <div className={locS.modes}>
                           <button onClick={() => dispatch(setListMode(false))}>
                              <Image
                                 src="./icons/table-icon.svg"
                                 width={40}
                                 height={40}
                                 alt="mode table"
                              />
                           </button>

                           <button onClick={() => dispatch(setListMode(true))}>
                              <Image
                                 src="./icons/list-icon.svg"
                                 width={40}
                                 height={40}
                                 alt="mode list"
                              />
                           </button>

                           <DropdownSort />
                        </div>
                     </div>

                     <div className={locS.table}>
                        {tasks.map((task) => (
                           <TaskItemTable key={task.id} task={task} />
                        ))}
                     </div>
                  </div>
               )}
            </div>
         </main>

         <Footer />
      </>
   )
}

export default MyTasks
