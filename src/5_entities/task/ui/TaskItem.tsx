import React from 'react'
import { useAppSelector } from '@/1_app/store/lib/hooks'
import { TaskItemActions, selectPendingDeleteId } from '@/5_entities/task'
import { Label } from '@/6_shared/ui/'
import { cn, useInlineEdit, useDeleteConfirmation } from '@/6_shared/lib/'
import type { TaskProps } from '../model/taskTypes'

import styles from './TaskItem.module.css'

const TaskItem = (props: TaskProps) => {
    const { id, title, completed, onToggle, onEdit, onDelete, onStartDelete, onCancelDelete } = props
    
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
    
    const { isDeleting, confirmDelete } = useDeleteConfirmation({
        onDelete: onDelete!,
        animationDuration: 300
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
        confirmDelete()
    }
    
    const handleCancelDelete = (event: React.MouseEvent) => {
        event.stopPropagation()
        onCancelDelete?.()
    }
    
    const itemClassName = cn(styles.task__item, isDeleting && styles.task__item_deleting)
    
    if (isDeleting) {
        return (
            <li className={itemClassName}>
                <div className={styles.task__item_placeholder} />
            </li>
        )
    }
    
    return (
        <li className={itemClassName}>
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
            
            <TaskItemActions
                isConfirming={isConfirming}
                completed={completed}
                isEditing={isEditing}
                onEdit={handleEdit}
                onStartDelete={handleStartDelete}
                onConfirmDelete={handleConfirmDelete}
                onCancelDelete={handleCancelDelete}
            />
        </li>
    )
}

export default TaskItem