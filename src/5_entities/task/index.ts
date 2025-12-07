import TaskItem from './ui/TaskItem'
import tasksReducer from './model/taskSlice'
import { initTasks, addTask, clearAllTasks, deleteTask, editTask, toggleTask } from './model/taskSlice'
import { selectTaskById, selectTasks, selectTasksCount, selectCompletedTasksCount } from './model/taskSlice'
import type { Task } from './model/taskTypes'

export { TaskItem, tasksReducer, initTasks, addTask, toggleTask, deleteTask, editTask, clearAllTasks, selectTasks, selectTaskById, selectTasksCount, selectCompletedTasksCount }
export type { Task }