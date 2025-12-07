import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/1_app/store/store'
import type { Task, TaskState } from './taskTypes'

const initialState: TaskState = {
    items: []
}

const tasksSlice = createSlice({
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
                    id: crypto.randomUUID() ?? Date.now().toString(),
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
        },
        clearAllTasks: (state) => {
            state.items = []
        }
    }
})

export const { initTasks, addTask, toggleTask, deleteTask, editTask, clearAllTasks } = tasksSlice.actions

export const selectTasks = (state: RootState) => state.tasks.items
export const selectTaskById = (id: string) => (state: RootState) => state.tasks.items.find(task => task.id === id)
export const selectTasksCount = (state: RootState) => state.tasks.items.length
export const selectCompletedTasksCount = (state: RootState) => state.tasks.items.filter(task => task.completed).length

export default tasksSlice.reducer