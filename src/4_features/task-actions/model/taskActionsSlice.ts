import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { TaskActionsState } from '@/4_features/task-actions/model/taskActionsTypes'

const initialState: TaskActionsState = {
    pendingDeleteId: null,
    editingTaskId: null,
    editDraft: '',
    deletingTaskIds: {}
}

const taskActionsSlice = createSlice({
    name: 'taskActions',
    initialState,
    reducers: {
        startDeleteConfirmation: (state, action: PayloadAction<string>) => {
            state.pendingDeleteId = action.payload
        },
        cancelDeleteConfirmation: (state) => {
            state.pendingDeleteId = null
        },
        markDeletingTask: (state, action: PayloadAction<string>) => {
            state.deletingTaskIds[action.payload] = true
        },
        finishDeletingTask: (state, action: PayloadAction<string>) => {
            delete state.deletingTaskIds[action.payload]
        },
        startEditingTask: (state, action: PayloadAction<{ id: string; initialValue: string }>) => {
            state.editingTaskId = action.payload.id
            state.editDraft = action.payload.initialValue
        },
        cancelEditingTask: (state) => {
            state.editingTaskId = null
            state.editDraft = ''
        },
        updateEditDraft: (state, action: PayloadAction<string>) => {
            state.editDraft = action.payload
        }
    }
})

export const {
    startDeleteConfirmation,
    cancelDeleteConfirmation,
    markDeletingTask,
    finishDeletingTask,
    startEditingTask,
    cancelEditingTask,
    updateEditDraft
} = taskActionsSlice.actions

export default taskActionsSlice.reducer

