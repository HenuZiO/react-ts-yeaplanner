import React from 'react'

import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import styles from './TaskItem.module.css'

interface Props {
    onClick?: React.MouseEventHandler<HTMLLIElement>
}

const TaskItem = ({ onClick }: Props) => {
    
    return (
        <li className={styles.task__item} onClick={onClick}>
            <input className={styles.task__checkbox} type='checkbox' />
            <label className={styles.task__label}>Задача</label>
            <div className={styles.task__actions}>
                <button
                    className={styles.task__edit}
                    type='button'
                    aria-label='Редактировать'
                    title='Редактировать'
                >
                    <span className={styles.task__icon}>
                        <FiEdit3 size={18} />
                    </span>
                </button>
                <button
                    className={styles.task__delete}
                    type='button'
                    aria-label='Удалить'
                    title='Удалить'
                >
                    <span className={styles.task__icon}>
                        <MdOutlineDelete size={18} />
                    </span>
                </button>
            </div>
        </li>
    )
}

export default TaskItem