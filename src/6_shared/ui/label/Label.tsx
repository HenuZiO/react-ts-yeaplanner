import React from 'react'
import { cn } from '@/6_shared/lib'

import styles from './Label.module.css'

type Props = React.LabelHTMLAttributes<HTMLLabelElement>

export const Label = (props: Props) => {
    const { className, children, ...rest } = props;
    
    return (
        <label className={cn(styles.label, className)} {...rest}>
            {children}
        </label>
    )
}