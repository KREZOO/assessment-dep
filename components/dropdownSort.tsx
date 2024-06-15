'use client'

import { useState, Fragment, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { selectSortProperty, setSortProperty, loadSortProperty } from '@/store/slices/sortSlice'

import { Menu, Transition } from '@headlessui/react'

import { listSortOptions } from '@/public/options/optionsText'

import globS from '@/styles/global.module.scss'
import locS from '@/styles/components/dropdownSortStyles.module.scss'

const DropdownSort = () => {
   const [isOpen, setIsOpen] = useState(false)
   const selectedSort = useSelector(selectSortProperty)
   const dispatch = useDispatch()

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
      dispatch(loadSortProperty())
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
      <Menu as="div" className={locS.menu}>
         <div>
            <Menu.Button onClick={() => setIsOpen(!isOpen)}>
               <Image src="/icons/dropdown/sort-icon.svg" width={40} height={40} alt="sort" />
            </Menu.Button>
         </div>
         <Transition show={isOpen} as={Fragment} {...transitionClasses}>
            <Menu.Items className={locS.items} ref={menuRef}>
               {listSortOptions.map((item, index) => (
                  <Menu.Item key={index}>
                     {({ active }) => (
                        <div className={locS.item}>
                           {selectedSort === item.sortProperty && (
                              <svg
                                 className={locS.activeIcon}
                                 width="16"
                                 height="16"
                                 viewBox="0 0 16 16"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M13.9999 4.66656L5.99992 12.6666L2.33325 8.9999L3.27325 8.0599L5.99992 10.7799L13.0599 3.72656L13.9999 4.66656Z"
                                    fill="#C6C6C6"
                                 />
                              </svg>
                           )}

                           <button
                              className={`${active ? locS.active : ''}`}
                              onClick={() => {
                                 setIsOpen(false)
                                 dispatch(setSortProperty(item.sortProperty))
                              }}
                           >
                              {item.name}
                           </button>
                        </div>
                     )}
                  </Menu.Item>
               ))}
            </Menu.Items>
         </Transition>
      </Menu>
   )
}

export default DropdownSort
