// UI Components
export { TaskItem } from './ui/TaskItem'
export { TaskStats } from './ui/TaskStats'
export { TaskItemActions } from './ui/TaskItemActions'

// Hooks
export { useCancelDelete } from './model/hooks/useCancelDelete'
export { useDeleteTask } from './model/hooks/useDeleteTask'
export { useEditTask } from './model/hooks/useEditTask'
export { useStartDelete } from './model/hooks/useStartDelete'
export { useToggleTask } from './model/hooks/useToggleTask'

// Main Reducer
export { default as tasksReducer } from './model/taskSlice'

// Reducers
export {
    initTasks,
    addTask,
    toggleTask,
    editTask,
    deleteTask,
    clearAllTasks,
    startDelete,
    cancelDelete
} from './model/taskSlice'

// Selectors
export {
    selectTasks,
    selectTaskById,
    selectTasksCount,
    selectCompletedTasksCount,
    selectFilteredTasks,
    selectPendingDeleteId
} from './model/taskSlice'

// Types
export type { Task, TaskProps, TaskState, TaskItemActionsProps } from './model/taskTypes'
