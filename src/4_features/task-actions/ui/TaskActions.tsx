import { selectTaskById } from '@/5_entities/task'
import { useAppDispatch, useAppSelector } from '@/6_shared/lib'
import { startEditingTask, startDeleteConfirmation, cancelDeleteConfirmation } from '../model/taskActionsSlice'
import { selectIsTaskPendingDelete, selectIsTaskEditing } from '../model/taskActionsSelectors'
import { confirmDeleteTask } from '../model/taskActionsThunks'
import { EditButton, DeleteButton, ConfirmDeleteButton, CancelDeleteButton } from './task-buttons'
import type { TaskActionsProps } from '../model/taskActionsTypes'

import styles from './TaskActions.module.css'

export const TaskActions = ({ taskId }: TaskActionsProps) => {
    const dispatch = useAppDispatch()
    
    const task = useAppSelector(state => selectTaskById(state, taskId))
    const isConfirming = useAppSelector((state) => selectIsTaskPendingDelete(state, taskId))
    const isEditing = useAppSelector((state) => selectIsTaskEditing(state, taskId))
    
    if (!task) return null
    
    const completed = task.completed
    
    const handleEdit = (event: React.MouseEvent) => {
        event.stopPropagation()
        if (completed || isEditing) return
        dispatch(startEditingTask({ id: taskId, initialValue: task.title }))
    }
    
    const handleStartDelete = (event: React.MouseEvent) => {
        event.stopPropagation()
        dispatch(startDeleteConfirmation(taskId))
    }
    
    const handleConfirmDelete = (event: React.MouseEvent) => {
        event.stopPropagation()
        dispatch(confirmDeleteTask(taskId))
    }
    
    const handleCancelDelete = (event: React.MouseEvent) => {
        event.stopPropagation()
        dispatch(cancelDeleteConfirmation())
    }
    
    const mutedClassName = (completed || isEditing) ? styles.muted : ''
    
    return (
        <div className={styles.actions}>
            {isConfirming ? (
                <CancelDeleteButton onClick={handleConfirmDelete} />
            ) : (
                <EditButton className={mutedClassName} onClick={handleEdit} />
            )}
            
            {isConfirming ? (
                <ConfirmDeleteButton onClick={handleCancelDelete} />
            ) : (
                <DeleteButton onClick={handleStartDelete} />
            )}
        </div>
    )
}
