import React from 'react'

import { IoMdClose } from 'react-icons/io'

import styles from './TaskButtons.module.css'

type ConfirmDeleteButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const ConfirmDeleteButton = ({ onClick }: ConfirmDeleteButtonProps) => {
    
    return (
        <button
            className={styles.button__cancel}
            type='button'
            onClick={onClick}
            aria-label='Отменить удаление'
            title='Отменить удаление'
        >
            <span className={styles.button__icon}>
                <IoMdClose size={18} />
            </span>
        </button>
    );
};
