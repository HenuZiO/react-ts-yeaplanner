import themeReducer from '@/features/theme-switcher/model/themeSlice'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
    theme: themeReducer
})