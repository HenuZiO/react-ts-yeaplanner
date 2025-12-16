import { ThemeSwitcher } from '@/4_features/toggle-theme'
import { ColorText, Logo, Container } from '@/6_shared/ui/'

import styles from './Header.module.css'

export const Header = () => {
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