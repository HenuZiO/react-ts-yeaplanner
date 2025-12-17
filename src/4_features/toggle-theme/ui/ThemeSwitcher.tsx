import { cn, useAppDispatch, useAppSelector } from '@/6_shared/lib'
import { toggleTheme } from '../model/themeSlice'
import { selectTheme } from '../model/themeSelectors'

import { GoMoon, GoSun } from "react-icons/go";

import styles from './ThemeSwitcher.module.css'

export const ThemeSwitcher = () => {
    const theme = useAppSelector(selectTheme)
    const dispatch = useAppDispatch()
    
    const themeClass = theme === 'light'
        ? styles.switcher__light
        : styles.switcher__dark
    
    return (
        <button
            className={cn(styles.switcher, themeClass)}
            aria-label='Переключить тему'
            onClick={() => dispatch(toggleTheme())}
        >
            <span className={cn(styles.switcher__icon, styles.switcher__icon__sun)}>
                <GoSun size={16} />
            </span>
            
            <span className={cn(styles.switcher__icon, styles.switcher__icon__moon)}>
                <GoMoon size={15} />
            </span>
        </button>
    )
}