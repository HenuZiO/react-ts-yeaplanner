import React from 'react'

import { IoIosCheckmarkCircle } from 'react-icons/io'

import styles from './TaskButtons.module.css'

type CancelDeleteButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const CancelDeleteButton = ({ onClick }: CancelDeleteButtonProps) => {
    
    return (
        <button
            className={styles.button__confirm}
            type='button'
            onClick={onClick}
            aria-label='Подтвердить удаление'
            title='Подтвердить удаление'
        >
            <span className={styles.button__icon}>
                <IoIosCheckmarkCircle size={18} />
            </span>
        </button>
    );
};
