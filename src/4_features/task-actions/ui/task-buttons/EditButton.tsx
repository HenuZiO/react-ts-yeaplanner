import React from 'react'
import { cn } from '@/6_shared/lib'

import { FiEdit3 } from 'react-icons/fi'

import styles from './TaskButtons.module.css'

type EditButtonProps = {
    className?: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const EditButton = ({ className, onClick }: EditButtonProps) => {
    
    return (
        <button
            className={cn(styles.button__edit, className)}
            type='button'
            onClick={onClick}
            aria-label='Редактировать'
            title='Редактировать'
        >
            <span className={styles.button__icon}>
                <FiEdit3 size={18} />
            </span>
        </button>
    );
};
