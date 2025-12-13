import React from 'react'
import { cn } from '@/6_shared/lib'

import styles from './ColorText.module.css'

const textColorVariants = {
    blue: styles.text__blue,
    purple: styles.text__purple,
}

type TextColorVariants = keyof typeof textColorVariants

type Props = {
    children: React.ReactNode
    color: TextColorVariants
    className?: string
}

export const ColorText = (props: Props) => {
    const { children, color, className } = props
    
    return (
        <span className={cn(textColorVariants[color], className)}>
            {children}
        </span>
    )
}