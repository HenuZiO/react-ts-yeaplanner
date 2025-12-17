import { useAppSelector } from '@/6_shared/lib'
import { ColorText } from '@/6_shared/ui'
import { selectTasksCount, selectCompletedTasksCount } from '../../model/taskSelectors'

import styles from './TaskStats.module.css'

export const TaskStats = () => {
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