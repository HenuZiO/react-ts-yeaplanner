import cn from '@/6_shared/lib/classNames'
import type { LabelHTMLAttributes } from 'react'

import styles from './Label.module.css'

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

const Label = (props: LabelProps) => {
    const { className, children, ...rest } = props;
    
    return (
        <label className={cn(styles.label, className)} {...rest}>
            {children}
        </label>
    )
}

export default Label