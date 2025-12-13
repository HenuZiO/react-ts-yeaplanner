import React, { forwardRef } from 'react'
import { cn } from '@/6_shared/lib'

import styles from './Button.module.css'

const buttonVariants = {
    blue: styles.button__blue,
    purple: styles.button__purple,
    outlined: styles.button__outlined,
    clear: styles.button__clear
}

type ButtonVariant = keyof typeof buttonVariants

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant
}

export const Button = forwardRef<HTMLButtonElement, Props>(
    ({ variant = 'blue', className, children, type = 'button', ...rest }, ref) => {
        
        return (
            <button
                ref={ref}
                className={cn(styles.button, buttonVariants[variant], className)}
                type={type}
                {...rest}
            >
                {children}
            </button>
        )
    }
)

Button.displayName = 'Button'