import React from 'react'
import { Button } from '@/6_shared/ui'

import { FaRegTrashCan } from 'react-icons/fa6'

import styles from './DeleteTasksButton.module.css'

type Props = {
    children: React.ReactNode
    onClick: () => void
}

export const DeleteTasksButton = (props: Props) => {
    const { children, onClick} = props
    
    return (
        <Button
            className={styles.button__delete}
            variant='purple'
            onClick={onClick}
            aria-label='Удалить все'
            title='Удалить все'
        >
            <FaRegTrashCan size={14} />
            <span>{children}</span>
        </Button>
    )
}