import React, { useState } from 'react'
import { useAppSelector } from '@/1_app/store/lib/hooks'
import { selectPendingDeleteId } from '@/5_entities/task'
import { Label } from '@/6_shared/ui/'
import { cn, useInlineEdit } from '@/6_shared/lib/'

import type { TaskProps } from '../model/taskTypes'

import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { IoIosCheckmarkCircle, IoMdClose } from "react-icons/io";

import styles from './TaskItem.module.css'

const TaskItem = (props: TaskProps) => {
    const { id, title, completed, onToggle, onEdit, onDelete, onStartDelete, onCancelDelete } = props
    
    const [isDeleting, setIsDeleting] = useState(false)
    
    const pendingDeleteId = useAppSelector(selectPendingDeleteId)
    const isConfirming = pendingDeleteId === id
    
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
        if (!isEditing && !isConfirming) onToggle?.()
    }
    
    const handleEdit = (event: React.MouseEvent) => {
        event.stopPropagation()
        startEdit()
    }
    
    const handleStartDelete = (event: React.MouseEvent) => {
        event.stopPropagation()
        onStartDelete?.(id)
    }
    
    const handleConfirmDelete = (event: React.MouseEvent) => {
        event.stopPropagation()
        setIsDeleting(true)
        
        setTimeout(() => {
            onDelete?.()
        }, 300)
    }
    
    const handleCancelDelete = (event: React.MouseEvent) => {
        event.stopPropagation()
        onCancelDelete?.()
    }
    
    const itemClass = cn(
        styles.task__item,
        isDeleting ? styles.task__item_deleting : ''
    )
    
    const editButtonClass = cn(
        styles.task__edit,
        (completed || isEditing) ? styles.task__edit_hidden : ''
    )
    
    if (isDeleting) {
        return (
            <li className={itemClass}>
                <div className={styles.task__item_placeholder} />
            </li>
        )
    }
    
    return (
        <li className={itemClass}>
            <input
                className={styles.task__checkbox}
                type='checkbox'
                checked={completed}
                readOnly={true}
                onClick={handleToggle}
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
                <Label className={styles.task__label} onClick={handleToggle}>
                    <span className={styles.task__text}>
                        {title}
                    </span>
                </Label>
            )}
            
            <div className={styles.task__actions}>
                {isConfirming ? (
                    <button
                        className={styles.task__confirm}
                        type='button'
                        onClick={handleConfirmDelete}
                        aria-label='Подтвердить удаление'
                        title='Подтвердить удаление'
                    >
                        <span className={styles.task__icon}>
                            <IoIosCheckmarkCircle size={18} />
                        </span>
                    </button>
                ) : (
                    <button
                        className={editButtonClass}
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
                
                {isConfirming ? (
                    <button
                        className={styles.task__cancel}
                        type='button'
                        onClick={handleCancelDelete}
                        aria-label='Отменить удаление'
                        title='Отменить удаление'
                    >
                        <span className={styles.task__icon}>
                            <IoMdClose size={18} />
                        </span>
                    </button>
                ) : (
                    <button
                        className={styles.task__delete}
                        type='button'
                        onClick={handleStartDelete}
                        aria-label='Удалить'
                        title='Удалить'
                    >
                        <span className={styles.task__icon}>
                            <MdOutlineDelete size={18} />
                        </span>
                    </button>
                )}
            </div>
        </li>
    )
}

export default TaskItem