// UI Components
import TaskItem from './ui/TaskItem'
import TaskStats from './ui/TaskStats'

// Main Reducer
import tasksReducer from './model/taskSlice'

// Reducers
import { addTask, clearAllTasks, deleteTask, editTask, initTasks, toggleTask } from './model/taskSlice'

// Selectors
import { selectCompletedTasksCount, selectTaskById, selectTasks, selectTasksCount, selectFilteredTasks } from './model/taskSlice'

// Types
import type { Task } from './model/taskTypes'

// Export
export {
    TaskItem, TaskStats, tasksReducer,
    initTasks, addTask, toggleTask,
    deleteTask, editTask, clearAllTasks,
    selectTasks, selectTaskById, selectTasksCount,
    selectCompletedTasksCount, selectFilteredTasks
}
export type { Task }