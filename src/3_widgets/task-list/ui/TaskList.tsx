import { useAppSelector } from '@/1_app/store/lib/hooks'
import { TaskListEmpty } from '@/3_widgets/task-list'
import { useDeleteTask } from '@/4_features/delete-task/'
import { useEditTask } from '@/4_features/edit-task'
import { useInitTasks } from '@/4_features/init-tasks/'
import { useToggleTask } from '@/4_features/toggle-task'
import { TaskItem, selectFilteredTasks } from '@/5_entities/task'

import styles from './TaskList.module.css'

const TaskList = () => {
    const tasks = useAppSelector(selectFilteredTasks)
    const handleToggle = useToggleTask()
    const handleEdit = useEditTask()
    const handleDelete = useDeleteTask()
    
    useInitTasks()
    
    if (tasks.length === 0) {
        return <TaskListEmpty />
    }
    
    return (
        <section className={styles.tasks}>
            <ul className={styles.tasks__list}>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        title={task.title}
                        completed={task.completed}
                        onToggle={() => handleToggle(task.id)}
                        onEdit={(newTitle) => handleEdit(task.id, newTitle)}
                        onDelete={() => handleDelete(task.id)}
                    />
                ))}
        </ul>
        </section>
    )
}

export default TaskList