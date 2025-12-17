import React from 'react'
import { selectTaskById, toggleTask } from '@/5_entities/task'
import { useAppDispatch, useAppSelector } from '@/6_shared/lib'

import styles from './TaskToggle.module.css'

export const TaskToggle = ({ taskId }: { taskId: string }) => {
    const dispatch = useAppDispatch()
    
    const task = useAppSelector(state => selectTaskById(state, taskId))
    
    if (!task) return null
    
    const handleCheckboxClick = (event: React.MouseEvent<HTMLInputElement>) => {
        event.stopPropagation()
        dispatch(toggleTask(taskId))
    }
    
    return (
        <input
            className={styles.checkbox}
            type='checkbox'
            onClick={handleCheckboxClick}
            checked={task.completed}
            readOnly={true}
        />
    )
}