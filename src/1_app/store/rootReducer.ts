import { filtersReducer } from '@/4_features/filter-tasks'
import { tasksReducer } from '@/5_entities/task'
import { themeReducer } from '@/4_features/theme-switcher'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
    theme: themeReducer,
    tasks: tasksReducer,
    filters: filtersReducer
})