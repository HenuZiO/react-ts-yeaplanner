import TaskItem from './ui/TaskItem'
import tasksReducer from './model/taskSlice'
import { addTask, clearAllTasks, deleteTask, editTask, toggleTask } from './model/taskSlice'
import { selectTaskById, selectTasks } from './model/taskSlice'

export { TaskItem, tasksReducer, addTask, toggleTask, deleteTask, editTask, clearAllTasks, selectTasks, selectTaskById }