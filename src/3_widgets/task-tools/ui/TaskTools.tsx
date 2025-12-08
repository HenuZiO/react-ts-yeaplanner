import { useAppSelector } from '@/1_app/store/lib/hooks'
import { TaskFilterSelect, TaskSearchInput } from '@/4_features/filter-tasks/'
import { useDeleteTasks } from '@/4_features/delete-all-tasks'
import { TaskStats, selectTasks } from '@/5_entities/task/'
import { Button } from '@/6_shared/ui'

import styles from './TaskTools.module.css'

const TaskTools = () => {
    const tasks = useAppSelector(selectTasks)
    const handleDeleteAllTasks = useDeleteTasks()
    
    if (tasks.length === 0) {
        return null
    }
    
    return (
        <section className={styles.tools}>
            <div className={styles.tools__header}>
                <TaskStats />
                <TaskSearchInput />
            </div>
            
            <div className={styles.tools__controls}>
                <h2 className={styles.tools__title}>Список задач</h2>
                <TaskFilterSelect />
                <Button
                    className={styles.tools__button}
                    variant='purple'
                    onClick={handleDeleteAllTasks}
                >
                    Удалить все
                </Button>
            </div>
        </section>
    )
}

export default TaskTools