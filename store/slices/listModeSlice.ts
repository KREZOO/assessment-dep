import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/store'

interface ListModeState {
   isListMode: boolean
}

const initialState: ListModeState = {
   isListMode: true
}

export const listModeSlice = createSlice({
   name: 'listMode',
   initialState,
   reducers: {
      setListMode(state, action: PayloadAction<boolean>) {
         state.isListMode = action.payload
         localStorage.setItem('isListMode', JSON.stringify(action.payload))
      },
      loadListMode(state) {
         const savedMode = localStorage.getItem('isListMode')
         if (savedMode !== null) {
            state.isListMode = JSON.parse(savedMode)
         }
      }
   }
})

export const { setListMode, loadListMode } = listModeSlice.actions

export const selectListMode = (state: RootState) => state.listMode.isListMode

export default listModeSlice.reducer
