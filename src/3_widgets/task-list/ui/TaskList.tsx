import { selectFilteredTasks } from '@/5_entities/task'
import { useAppSelector } from '@/6_shared/lib'
import { TaskListRow } from './task-list-row'
import { TaskListEmpty } from './task-list-empty'

import styles from './TaskList.module.css'

export const TaskList = () => {
    const tasks = useAppSelector(selectFilteredTasks)
    
    if (tasks.length === 0) {
        return <TaskListEmpty />
    }
    
    return (
        <section className={styles.tasks}>
            <ul className={styles.tasks__list}>
                {tasks.map(task => (
                    <TaskListRow key={task.id} taskId={task.id} />
                ))}
            </ul>
        </section>
    )
}