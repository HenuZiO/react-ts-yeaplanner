import React from 'react'
import cn from '@/6_shared/lib/utils/classNames'

import styles from './Label.module.css'

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

const Label = (props: LabelProps) => {
    const { className, children, ...rest } = props;
    
    return (
        <label className={cn(styles.label, className)} {...rest}>
            {children}
        </label>
    )
}

export default Label