import React, { useEffect, useRef } from 'react'
import { selectTaskById, toggleTask } from '@/5_entities/task'
import { Label } from '@/6_shared/ui'
import { cn, useAppDispatch, useAppSelector } from '@/6_shared/lib'
import { cancelEditingTask, updateEditDraft } from '../../model/taskActionsSlice'
import { selectIsTaskEditing, selectTaskEditingValueById } from '../../model/taskActionsSelectors'
import { submitTaskEdit } from '../../model/taskActionsThunks'

import styles from './TaskTitleEditor.module.css'

export const TaskTitleEditor = ({ taskId }: { taskId: string }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    
    const dispatch = useAppDispatch()
    
    const task = useAppSelector(state => selectTaskById(state, taskId))
    const isEditing = useAppSelector(state => selectIsTaskEditing(state, taskId))
    const editValue = useAppSelector(state => selectTaskEditingValueById(state, taskId))
    
    useEffect(() => {
        if (isEditing) {
            inputRef.current?.focus()
            inputRef.current?.select()
        }
    }, [isEditing])
    
    if (!task) return null
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEditDraft(event.target.value))
    }
    
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            dispatch(submitTaskEdit())
        }
        if (event.key === 'Escape') {
            dispatch(cancelEditingTask())
        }
    }
    
    const handleBlur = () => {
        dispatch(submitTaskEdit())
    }
    
    if (isEditing) {
        return (
            <input
                className={styles.input}
                ref={inputRef}
                value={editValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
            />
        )
    }
    
    const titleClassName = cn(styles.text, task.completed && styles.text__completed)
    
    return (
        <Label
            className={styles.label}
            onClick={() => dispatch(toggleTask(taskId))}
        >
            <span className={titleClassName}>
                {task.title}
            </span>
        </Label>
    )
}