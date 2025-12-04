import { ThemeSwitcher } from '@/features/theme-switcher'
import { ColorText } from '@/shared/color-text'
import Container from '@/shared/container/ui/Container'
import { Logo } from '@/shared/logo'

import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.header__container}>
                <ThemeSwitcher />
                <div className={styles.header__logo}>
                    <Logo width={26} height={39} />
                    <h1 className={styles.header__title}>
                        <ColorText color='blue'>Yea</ColorText>
                        <ColorText color='purple'>Planner</ColorText>
                    </h1>
                </div>
            </Container>
        </header>
    )
}

export default Header