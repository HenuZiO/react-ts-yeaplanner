import React, { forwardRef } from 'react'
import { cn } from '@/6_shared/lib'

import styles from './Input.module.css'

const inputVariants = {
    default: '',
    small: styles.input__small
}

type InputVariant = keyof typeof inputVariants

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    variant?: InputVariant
}

export const Input = forwardRef<HTMLInputElement, Props>(
    ({ className, type = 'text', variant = 'default', ...rest }, ref) => {
        
        return (
            <input
                ref={ref}
                className={cn(styles.input, inputVariants[variant], className)}
                type={type}
                {...rest}
            />
        )
    }
)

Input.displayName = 'Input'