// UI Components
export { ThemeSwitcher } from './ui/ThemeSwitcher'

// Main Reducer
export { default as themeReducer } from './model/themeSlice'

// Selectors
export { selectTheme, setTheme, toggleTheme } from './model/themeSlice'

// Types
export type { Theme, ThemeState } from './model/themeTypes'