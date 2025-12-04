import React from 'react'
import type { TaskProps } from '../model/taskTypes'

import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";

import styles from './TaskItem.module.css'

const TaskItem = (props: TaskProps) => {
    const { title, completed, onToggle, onEdit, onDelete } = props
    
    const handleToggle = (event: React.MouseEvent) => {
        event.stopPropagation()
        onToggle?.()
    }
    
    const handleEdit = (event: React.MouseEvent) => {
        event.stopPropagation()
        onEdit?.()
    }
    
    const handleDelete = (event: React.MouseEvent) => {
        event.stopPropagation()
        onDelete?.()
    }
    
    return (
        <li className={styles.task__item} onClick={handleToggle}>
            <input
                className={styles.task__checkbox}
                type='checkbox'
                checked={completed}
                readOnly={true}
            />
            <label className={styles.task__label}>
                {title}
            </label>
            <div className={styles.task__actions}>
                <button
                    className={styles.task__edit}
                    type='button'
                    onClick={handleEdit}
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
                    onClick={handleDelete}
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