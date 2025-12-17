import { createSlice } from '@reduxjs/toolkit'
import type { ThemeState } from './themeTypes'

const initialState: ThemeState = {
    theme: 'dark'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark'
        }
    }
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
