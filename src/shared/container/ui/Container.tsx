import type { ReactNode } from 'react'
import styles from './Container.module.css'

interface Props {
    children: ReactNode
    className?: string
}

const Container = ({ children, className }: Props) => {
    
    return (
        <div className={`${styles.container} ${className ?? ''}`}>
            {children}
        </div>
    )
}

export default Container