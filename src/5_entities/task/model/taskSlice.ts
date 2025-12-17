import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Task, TaskState } from './taskTypes'

const initialState: TaskState = {
    items: []
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
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
        },
        clearAllTasks: (state) => {
            state.items = []
        }
    }
})

export const { addTask, toggleTask, editTask, deleteTask, clearAllTasks } = taskSlice.actions

export default taskSlice.reducer