// UI Components
import ThemeSwitcher from './ui/ThemeSwitcher'

// Main Reducer
import themeReducer from './model/themeSlice'

// Selectors
import { selectTheme, setTheme, toggleTheme } from './model/themeSlice'

// Types
import type { Theme } from './model/themeSlice'

// Export
export { ThemeSwitcher, themeReducer, setTheme, toggleTheme, selectTheme }
export type { Theme }