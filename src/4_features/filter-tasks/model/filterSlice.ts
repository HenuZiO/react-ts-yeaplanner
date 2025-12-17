import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
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

export default filterSlice.reducer