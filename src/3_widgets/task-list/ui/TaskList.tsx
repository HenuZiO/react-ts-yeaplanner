import { TaskListEmpty } from './TaskListEmpty'
import {
    selectFilteredTasks,
    TaskItem,
    useCancelDelete,
    useDeleteTask,
    useEditTask,
    useStartDelete,
    useToggleTask
} from '@/5_entities/task'
import { useAppSelector } from '@/6_shared/lib'

import styles from './TaskList.module.css'

export const TaskList = () => {
    const tasks = useAppSelector(selectFilteredTasks)
    const handleToggle = useToggleTask()
    const handleEdit = useEditTask()
    const handleDelete = useDeleteTask()
    const startDelete = useStartDelete()
    const cancelDelete = useCancelDelete()
    
    if (tasks.length === 0) {
        return <TaskListEmpty />
    }
    
    return (
        <section className={styles.tasks}>
            <ul className={styles.tasks__list}>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        completed={task.completed}
                        onToggle={() => handleToggle(task.id)}
                        onEdit={(newTitle) => handleEdit(task.id, newTitle)}
                        onDelete={() => handleDelete(task.id)}
                        onStartDelete={startDelete}
                        onCancelDelete={cancelDelete}
                    />
                ))}
        </ul>
        </section>
    )
}