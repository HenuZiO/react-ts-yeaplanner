import tasksReducer from '@/5_entities/task/model/taskSlice'
import themeReducer from '@/4_features/theme-switcher/model/themeSlice'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
    theme: themeReducer,
    tasks: tasksReducer
})