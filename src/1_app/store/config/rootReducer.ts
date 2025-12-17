import { combineReducers } from '@reduxjs/toolkit'
import { filtersReducer } from '@/4_features/filter-tasks'
import { themeReducer } from '@/4_features/toggle-theme'
import { taskActionsReducer } from '@/4_features/task-actions'
import { tasksReducer } from '@/5_entities/task'

export const rootReducer = combineReducers({
    theme: themeReducer,
    tasks: tasksReducer,
    filters: filtersReducer,
    taskActions: taskActionsReducer
})