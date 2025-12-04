import styles from './ColorText.module.css'

type ColorVariants = 'blue' | 'purple'

interface Props {
    children: string
    color: ColorVariants
}

const ColorText = (props: Props) => {
    const { children, color } = props
    
    return (
        <span className={styles[`text_${color}`]}>
            {children}
        </span>
    )
}

export default ColorText