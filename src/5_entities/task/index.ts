// UI Components
import TaskItem from './ui/TaskItem'
import TaskStats from './ui/TaskStats'
import TaskItemActions from './ui/TaskItemActions'

// Main Reducer
import tasksReducer from './model/taskSlice'

// Reducers
import { addTask, cancelDelete, clearAllTasks, deleteTask, editTask, initTasks, startDelete, toggleTask } from './model/taskSlice'

// Selectors
import { selectCompletedTasksCount, selectFilteredTasks, selectPendingDeleteId, selectTaskById, selectTasks, selectTasksCount } from './model/taskSlice'

// Types
import type { Task } from './model/taskTypes'

// Export
export {
    TaskItem, TaskStats, TaskItemActions, tasksReducer,
    initTasks, addTask, toggleTask,
    deleteTask, editTask, clearAllTasks,
    selectTasks, selectTaskById, selectTasksCount,
    selectCompletedTasksCount, selectFilteredTasks,
    startDelete, cancelDelete, selectPendingDeleteId
}
export type { Task }