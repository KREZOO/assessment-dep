import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch, useStore, useSelector } from 'react-redux'

import sortSlice from './slices/sortSlice'
import listModeSlice from './slices/listModeSlice'
import createTaskSlice from './slices/createTaskSlice'
import questionCountersSlice from './slices/questionCountersSlice'

const rootReducer = combineReducers({
   sort: sortSlice,
   listMode: listModeSlice,
   createTask: createTaskSlice,
   questionCounters: questionCountersSlice
})

export const makeStore = () =>
   configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
   })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()
