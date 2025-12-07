import React, { forwardRef } from 'react'
import cn from '@/6_shared/lib/classNames'

import styles from './Input.module.css'

const inputVariants = {
    default: '',
    small: styles.input__small
}

type InputVariant = keyof typeof inputVariants

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    variant?: InputVariant
}

const Input = forwardRef<HTMLInputElement, InputProps>(
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

export default Input