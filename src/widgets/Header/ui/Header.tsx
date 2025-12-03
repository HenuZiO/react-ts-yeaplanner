import { ColorText } from '@/shared/ColorText'
import Container from '@/shared/Container/ui/Container'
import { Logo } from '@/shared/Logo'

import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.header__container}>
                <button className='theme-toggle' aria-label='Переключить тему' data-theme-toggle>
                    <span className='theme-toggle__icon theme-toggle__icon--sun'>☀️</span>
                    <span className='theme-toggle__icon theme-toggle__icon--moon'>🌙</span>
                </button>
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