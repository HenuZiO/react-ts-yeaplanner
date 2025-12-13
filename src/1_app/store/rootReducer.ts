import { combineReducers } from '@reduxjs/toolkit'
import { filtersReducer } from '@/4_features/filter-tasks'
import { themeReducer } from '@/4_features/theme-switcher'
import { tasksReducer } from '@/5_entities/task'

export const rootReducer = combineReducers({
    theme: themeReducer,
    tasks: tasksReducer,
    filters: filtersReducer
})