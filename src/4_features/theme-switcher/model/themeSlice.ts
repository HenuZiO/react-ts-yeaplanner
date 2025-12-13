import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/1_app/store'
import type { Theme, ThemeState } from '@/4_features/theme-switcher/model/themeTypes'

const initialState: ThemeState = {
    theme: 'dark'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload
        },
        toggleTheme: (state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark'
        }
    }
})

export const { setTheme, toggleTheme } = themeSlice.actions
export const selectTheme = (state: RootState) => state.theme.theme

export default themeSlice.reducer
