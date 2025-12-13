import React, { forwardRef } from 'react'
import { cn } from '@/6_shared/lib'

import styles from './Select.module.css'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children: React.ReactNode
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, children, ...rest }, ref) => {
        return (
            <select
                ref={ref}
                className={cn(styles.select, className)}
                {...rest}
            >
                {children}
            </select>
        )
    }
)

Select.displayName = 'Select'