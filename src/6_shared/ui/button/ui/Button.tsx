import cn from '@/6_shared/lib/classNames'
import React, { forwardRef } from 'react'

import styles from './Button.module.css'

const buttonVariants = {
    blue: styles.button__blue,
    purple: styles.button__purple,
    clear: styles.button__clear
}

type ButtonVariant = keyof typeof buttonVariants

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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

export default Button