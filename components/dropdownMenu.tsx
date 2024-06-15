'use client'

import { useState, Fragment, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'

import globS from '@/styles/global.module.scss'
import locS from '@/styles/components/dropdownMenuStyles.module.scss'

const DropdownMenu: React.FC = () => {
   const [isOpen, setIsOpen] = useState(false)
   const menuRef = useRef<HTMLDivElement>(null)

   const transitionClasses = {
      enter: globS.transitionEnter_dropdownMenu,
      enterFrom: globS.transitionEnterFrom_dropdownMenu,
      enterTo: globS.transitionEnterTo_dropdownMenu,
      leave: globS.transitionLeave_dropdownMenu,
      leaveFrom: globS.transitionLeaveFrom_dropdownMenu,
      leaveTo: globS.transitionLeaveTo_dropdownMenu
   }

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
      <Menu as="div" className={locS.menu}>
         <div>
            <Menu.Button onClick={() => setIsOpen(!isOpen)}>
               <Image
                  src="./icons/dropdown/dropdown-icon.svg"
                  width={24}
                  height={24}
                  alt="Dropdown"
               />
            </Menu.Button>
         </div>
         <Transition show={isOpen} as={Fragment} {...transitionClasses}>
            <Menu.Items className={locS.items} ref={menuRef}>
               <Menu.Item>
                  {({ active }) => (
                     <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`${active ? locS.active : ''}`}
                     >
                        <Image
                           src="./icons/dropdown/edit-icon.svg"
                           width={16}
                           height={16}
                           alt="Edit"
                        />

                        <span>Редагування</span>
                     </button>
                  )}
               </Menu.Item>
               <Menu.Item>
                  {({ active }) => (
                     <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`${active ? locS.active : ''}`}
                     >
                        <Image
                           src="./icons/dropdown/result-icon.svg"
                           alt="Result"
                           width={16}
                           height={16}
                        />

                        <span>Результати</span>
                     </button>
                  )}
               </Menu.Item>
               <Menu.Item>
                  {({ active }) => (
                     <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`${active ? locS.active : ''}`}
                     >
                        <Image
                           src="./icons/dropdown/share-outline-icon.svg"
                           alt="Share"
                           width={16}
                           height={16}
                        />

                        <span>Поділитись</span>
                     </button>
                  )}
               </Menu.Item>
               <Menu.Item>
                  {({ active }) => (
                     <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`${active ? locS.active : ''}`}
                     >
                        <Image
                           src="./icons/dropdown/copy-icon.svg"
                           width={16}
                           height={16}
                           alt="Copy"
                        />

                        <span>Скопіювати</span>
                     </button>
                  )}
               </Menu.Item>
               <Menu.Item>
                  {({ active }) => (
                     <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`${active ? locS.active : ''}`}
                     >
                        <Image
                           src="./icons/dropdown/trash-icon.svg"
                           alt="Delete"
                           width={16}
                           height={16}
                        />

                        <span>Видалити</span>
                     </button>
                  )}
               </Menu.Item>
            </Menu.Items>
         </Transition>
      </Menu>
   )
}

export default DropdownMenu
