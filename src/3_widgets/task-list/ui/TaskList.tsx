import { useAppSelector } from '@/1_app/store/lib/hooks'
import { useDeleteTask } from '@/4_features/delete-task/'
import useInitTasks from '@/4_features/init-tasks/model/useInitTasks'
import { useToggleTask } from '@/4_features/toggle-task'
import { TaskItem, selectTasks } from '@/5_entities/task'

import styles from './TaskList.module.css'

const TaskList = () => {
    const tasks = useAppSelector(selectTasks)
    const handleToggle = useToggleTask()
    const handleDelete = useDeleteTask()
    
    useInitTasks()
    
    return (
        <ul className={styles.task_list}>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    title={task.title}
                    completed={task.completed}
                    onToggle={() => handleToggle(task.id)}
                    onDelete={() => handleDelete(task.id)}
                />
            ))}
        </ul>
    )
}

export default TaskList