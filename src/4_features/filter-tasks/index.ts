// UI Components
import TaskSearchInput from './ui/TaskSearchInput'
import TaskFilterSelect from './ui/TaskFilterSelect'

// Main Reducer
import filtersReducer from './model/filterSlice'

// Reducers
import { setFilter, setSearchQuery } from './model/filterSlice'

// Selectors
import { selectFilter, selectSearchQuery } from './model/filterSlice'

// Types
import type { FilterState, TaskFilter } from './model/filterTypes'

// Export
export {
    TaskSearchInput, TaskFilterSelect, filtersReducer,
    setFilter, setSearchQuery, selectFilter, selectSearchQuery
}
export type { TaskFilter, FilterState }