import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/store'

interface SortState {
   sortProperty: string
}

const initialState: SortState = {
   sortProperty: 'title'
}

export const sortSlice = createSlice({
   name: 'sort',
   initialState,
   reducers: {
      setSortProperty(state, action: PayloadAction<string>) {
         state.sortProperty = action.payload
         localStorage.setItem('sortProperty', action.payload)
      },
      loadSortProperty(state) {
         const savedSort = localStorage.getItem('sortProperty')
         if (savedSort !== null) {
            state.sortProperty = savedSort
         }
      }
   }
})

export const { setSortProperty, loadSortProperty } = sortSlice.actions

export const selectSortProperty = (state: RootState) => state.sort.sortProperty

export default sortSlice.reducer
