import type { RootState } from '@/1_app/store'

export const selectIsTaskPendingDelete = (state: RootState, taskId: string) => {
    return state.taskActions.pendingDeleteId === taskId
}

export const selectIsTaskDeleting = (state: RootState, taskId: string) => {
    return Boolean(state.taskActions.deletingTaskIds[taskId])
}

export const selectIsTaskEditing = (state: RootState, taskId: string) => {
    return state.taskActions.editingTaskId === taskId
}

export const selectTaskEditingValueById = (state: RootState, taskId: string) => {
    return state.taskActions.editingTaskId === taskId ? state.taskActions.editDraft : ''
}