import type { RootState } from '@/1_app/store'

export const selectTheme = (state: RootState) => {
    return state.theme.theme
}