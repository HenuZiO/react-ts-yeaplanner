import { useAppDispatch, useAppSelector } from '@/1_app/store/lib/hooks'
import { selectTheme, toggleTheme } from '@/4_features/theme-switcher/'
import cn from '@/6_shared/lib/utils/classNames'

import { GoMoon, GoSun } from "react-icons/go";

import styles from './ThemeSwitcher.module.css'

const ThemeSwitcher = () => {
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

export default ThemeSwitcher