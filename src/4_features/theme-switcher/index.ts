import ThemeSwitcher from './ui/ThemeSwitcher'
import themeReducer from './model/themeSlice'
import { selectTheme, setTheme, toggleTheme } from './model/themeSlice'
import type { Theme } from './model/themeSlice'

export { ThemeSwitcher, themeReducer, setTheme, toggleTheme, selectTheme }
export type { Theme }