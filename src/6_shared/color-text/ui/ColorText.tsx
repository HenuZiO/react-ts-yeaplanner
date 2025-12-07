import cn from '@/6_shared/lib/classNames'
import  { type ReactNode } from 'react'
import styles from './ColorText.module.css'

type ColorVariants = 'blue' | 'purple'

interface Props {
    children: ReactNode
    color: ColorVariants
    className?: string
}

const ColorText = (props: Props) => {
    const { children, color, className } = props
    
    return (
        <span className={cn(styles[`text_${color}`], className)}>
            {children}
        </span>
    )
}

export default ColorText