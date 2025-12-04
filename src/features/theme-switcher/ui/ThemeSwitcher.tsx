import cn from '@/shared/lib/classNames'
import { GoMoon, GoSun } from "react-icons/go";

import styles from './ThemeSwitcher.module.css'

const ThemeSwitcher = () => {
    
    return (
        <button className={styles.theme_switcher} aria-label='Переключить тему'>
            <span className={cn(styles.theme_switcher__icon, styles.theme_switcher__icon__sun)}>
                <GoSun size={16} />
            </span>
            <span className={cn(styles.theme_switcher__icon, styles.theme_switcher__icon__moon)}>
                <GoMoon size={15} />
            </span>
        </button>
    )
}

export default ThemeSwitcher