import React from 'react'
import { cn } from '@/6_shared/lib'

import styles from './Container.module.css'

interface ContainerProps {
    children: React.ReactNode
    className?: string
}

const Container = ({ children, className }: ContainerProps) => {
    
    return (
        <div className={cn(styles.container, className)}>
            {children}
        </div>
    )
}

export default Container