import React from 'react'

import { MdOutlineDelete } from 'react-icons/md'

import styles from './TaskButtons.module.css'

type DeleteButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const DeleteButton = ({ onClick }: DeleteButtonProps) => {
    
    return (
        <button
            className={styles.button__delete}
            type='button'
            onClick={onClick}
            aria-label='Удалить'
            title='Удалить'
        >
            <span className={styles.button__icon}>
                <MdOutlineDelete size={18} />
            </span>
        </button>
    );
};
