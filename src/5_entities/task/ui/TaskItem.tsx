import useInlineEdit from '@/6_shared/lib/useInlineEdit'
import { Label } from '@/6_shared/ui/label'
import React from 'react'

import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import type { TaskProps } from '../model/taskTypes'

import styles from './TaskItem.module.css'

const TaskItem = (props: TaskProps) => {
    const { title, completed, onToggle, onEdit, onDelete } = props
    
    const {
        isEditing,
        editValue,
        inputRef,
        startEdit,
        setEditValue,
        handleKeyDown,
        handleBlur
    } = useInlineEdit({
        initialValue: title,
        onSave: (newTitle) => onEdit?.(newTitle)
    })
    
    const handleToggle = (event: React.MouseEvent) => {
        event.stopPropagation()
        onToggle?.()
    }
    
    const handleEdit = (event: React.MouseEvent) => {
        event.stopPropagation()
        startEdit()
    }
    
    const handleDelete = (event: React.MouseEvent) => {
        event.stopPropagation()
        onDelete?.()
    }
    
    const handleItemClick = (event: React.MouseEvent) => {
        if (!isEditing) handleToggle(event)
    }
    
    return (
        <li className={styles.task__item} onClick={handleItemClick}>
            <input
                className={styles.task__checkbox}
                type='checkbox'
                checked={completed}
                readOnly={true}
            />
            {isEditing ? (
                <input
                    className={styles.task__input}
                    ref={inputRef}
                    type='text'
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onBlur={handleBlur}
                />
            ) : (
                <Label className={styles.task__label}>
                    {title}
                </Label>
            )}
            <div className={styles.task__actions}>
                {!completed && !isEditing && (
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
                )}
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