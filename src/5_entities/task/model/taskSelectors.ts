import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '@/1_app/store'

export const selectTasks = (state: RootState) => state.tasks.items
export const selectTaskById = (state: RootState, taskId: string) => state.tasks.items.find(task => task.id === taskId)
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