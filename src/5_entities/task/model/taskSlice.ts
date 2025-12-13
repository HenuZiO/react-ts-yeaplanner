import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/1_app/store'
import type { Task, TaskState } from '@/5_entities/task'

const initialState: TaskState = {
    items: [],
    pendingDeleteId: null
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        initTasks: (state, action: PayloadAction<Task[]>) => {
            state.items = action.payload
        },
        addTask: {
            reducer: (state, action: PayloadAction<Task>) => {
                state.items.push(action.payload)
            },
            prepare: (title: string) => ({
                payload: {
                    id: crypto.randomUUID() ?? Date.now()
                        .toString(),
                    title,
                    completed: false
                } as Task
            })
        },
        toggleTask: (state, action: PayloadAction<string>) => {
            const task = state.items.find(task => task.id === action.payload)
            if (task) task.completed = !task.completed
        },
        editTask: (state, action: PayloadAction<{ id: string; title: string }>) => {
            const task = state.items.find(task => task.id === action.payload.id)
            if (task) task.title = action.payload.title
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(task => task.id !== action.payload)
            state.pendingDeleteId = null
        },
        clearAllTasks: (state) => {
            state.items = []
        },
        startDelete: (state, action: PayloadAction<string>) => {
            state.pendingDeleteId = action.payload
        },
        cancelDelete: (state) => {
            state.pendingDeleteId = null
        },
    }
})

export const {
    initTasks,
    addTask,
    toggleTask,
    deleteTask,
    editTask,
    clearAllTasks,
    startDelete,
    cancelDelete
} = taskSlice.actions

export const selectTasks = (state: RootState) => state.tasks.items
export const selectTaskById = (id: string) => (state: RootState) => state.tasks.items.find(task => task.id === id)
export const selectTasksCount = (state: RootState) => state.tasks.items.length
export const selectCompletedTasksCount = (state: RootState) => state.tasks.items.filter(task => task.completed).length
export const selectFilteredTasks = createSelector(
    [
        selectTasks,
        (state: RootState) => state.filters.filter,
        (state: RootState) => state.filters.searchQuery
    ],
    (tasks, filter, searchQuery) => {
        let filtered = tasks
        
        if (filter === 'active') {
            filtered = filtered.filter(task => !task.completed)
        } else if (filter === 'completed') {
            filtered = filtered.filter(task => task.completed)
        }
        
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase()
            
            filtered = filtered.filter(task =>
                task.title.toLowerCase().includes(query)
            )
        }
        
        return filtered
    }
)
export const selectPendingDeleteId = (state: RootState) => state.tasks.pendingDeleteId

export default taskSlice.reducer