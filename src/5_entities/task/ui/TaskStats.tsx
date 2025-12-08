import { useAppSelector } from '@/1_app/store/lib/hooks'
import { selectTasksCount, selectCompletedTasksCount } from '@/5_entities/task'
import { ColorText } from '@/6_shared/ui/'

import styles from './TaskStats.module.css'

const TaskStats = () => {
    const totalTasksCount = useAppSelector(selectTasksCount)
    const completedTasksCount = useAppSelector(selectCompletedTasksCount)
    
    return (
        <div className={styles.stats}>
            <ColorText className={styles.stat} color='blue'>
                Всего задач
                <span className={styles.counter}>
                    {totalTasksCount}
                </span>
            </ColorText>
            <span className={styles.divider}>|</span>
            <ColorText className={styles.stat} color='purple'>
                Выполнено
                <span className={styles.counter}>
                    {completedTasksCount}
                </span>
            </ColorText>
        </div>
    );
};

export default TaskStats;