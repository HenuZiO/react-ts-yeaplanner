import type { AppDispatch, RootState } from '@/1_app/store'
import { editTask, selectTaskById, deleteTask } from '@/5_entities/task'
import { markDeletingTask, cancelEditingTask, finishDeletingTask, cancelDeleteConfirmation } from './taskActionsSlice'

const DELETE_ANIMATION_DURATION = 300

export const confirmDeleteTask = (taskId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    if (getState().taskActions.editingTaskId === taskId) {
        dispatch(cancelEditingTask())
    }
    
    dispatch(markDeletingTask(taskId))
    
    dispatch(cancelDeleteConfirmation())
    
    window.setTimeout(() => {
        dispatch(deleteTask(taskId))
        dispatch(finishDeletingTask(taskId))
    }, DELETE_ANIMATION_DURATION)
}

export const submitTaskEdit = () => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const { editingTaskId, editDraft } = state.taskActions
    
    if (!editingTaskId) return
    
    const trimmed = editDraft.trim()
    
    if (!trimmed) {
        dispatch(cancelEditingTask())
        return
    }
    
    const task = selectTaskById(state, editingTaskId)
    
    if (!task) {
        dispatch(cancelEditingTask())
        return
    }
    
    if (task.title !== trimmed) {
        dispatch(editTask({ id: editingTaskId, title: trimmed }))
    }
    
    dispatch(cancelEditingTask())
}

