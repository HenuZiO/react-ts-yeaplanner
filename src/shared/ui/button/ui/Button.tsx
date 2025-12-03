import React, { forwardRef } from 'react'
import styles from './Button.module.css'

type ButtonVariant = {
    variant?: 'blue' | 'purple' | 'clear'
    className?: string
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariant

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'blue', className, children, type = 'button', ...rest }, ref) => {
        return (
            <button
                ref={ref}
                className={`${styles.button} ${styles[`button__${variant}`]} ${className ?? ''}`}
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