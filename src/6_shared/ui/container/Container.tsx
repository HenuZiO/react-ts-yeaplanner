import React from 'react'
import { cn } from '@/6_shared/lib'

import styles from './Container.module.css'

type Props = {
    children: React.ReactNode
    className?: string
}

export const Container = (props: Props) => {
    const { children, className } = props
    
    return (
        <div className={cn(styles.container, className)}>
            {children}
        </div>
    )
}