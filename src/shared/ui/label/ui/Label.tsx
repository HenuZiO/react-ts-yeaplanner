import type { FC, LabelHTMLAttributes } from 'react'
import styles from './Label.module.css'

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
    className?: string;
};

const Label: FC<LabelProps> = (props) => {
    const { className, children, ...rest } = props;
    
    return (
        <label className={`${styles.label} ${className || ''}`} {...rest}>
            {children}
        </label>
    )
}

export default Label