import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/1_app/store/store'
import type { FilterState, TaskFilter } from './filterTypes'

const initialState: FilterState = {
    filter: 'all',
    searchQuery: ''
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<TaskFilter>) => {
            state.filter = action.payload
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload
        },
    }
})

export const { setFilter, setSearchQuery } = filterSlice.actions

export const selectFilter = (state: RootState) => state.filters.filter
export const selectSearchQuery = (state: RootState) => state.filters.searchQuery

export default filterSlice.reducer