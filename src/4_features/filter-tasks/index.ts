// UI Components
export { TaskSearchInput } from './ui/TaskSearchInput'
export { TaskFilterSelect } from './ui/TaskFilterSelect'

// Main Reducer
export { default as filtersReducer } from './model/filterSlice'

// Reducers
export { setFilter, setSearchQuery } from './model/filterSlice'

// Selectors
export { selectFilter, selectSearchQuery } from './model/filterSlice'

// Types
export type { FilterState, TaskFilter } from './model/filterTypes'