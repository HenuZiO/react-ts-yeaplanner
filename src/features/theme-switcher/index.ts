import type { Theme } from './model/themeSlice'
import { selectTheme, setTheme, toggleTheme } from './model/themeSlice'
import ThemeSwitcher from './ui/ThemeSwitcher'

export { ThemeSwitcher, setTheme, toggleTheme, selectTheme }
export type { Theme }