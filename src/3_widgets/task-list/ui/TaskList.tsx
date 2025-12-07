import { useAppSelector } from '@/1_app/store/lib/hooks'
import { useDeleteTask } from '@/4_features/delete-task/'
import { useEditTask } from '@/4_features/edit-task'
import useInitTasks from '@/4_features/init-tasks/model/useInitTasks'
import { useToggleTask } from '@/4_features/toggle-task'
import { selectTasks, TaskItem } from '@/5_entities/task'

import styles from './TaskList.module.css'

const TaskList = () => {
    const tasks = useAppSelector(selectTasks)
    const handleToggle = useToggleTask()
    const handleEdit = useEditTask()
    const handleDelete = useDeleteTask()
    
    useInitTasks()
    
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