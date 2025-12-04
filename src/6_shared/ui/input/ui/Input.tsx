import React, { forwardRef } from 'react'
import styles from './Input.module.css'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, type = 'text', ...rest }, ref) => {
        return (
            <input
                ref={ref}
                className={`${styles.input} ${className ?? ''}`}
                type={type}
                {...rest}
            />
        )
    }
)

Input.displayName = 'Input'

export default Input