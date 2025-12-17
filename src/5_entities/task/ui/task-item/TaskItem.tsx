import { cn } from '@/6_shared/lib'
import type { TaskItemProps } from '../../model/taskTypes'

import styles from './TaskItem.module.css'

export const TaskItem = (props: TaskItemProps) => {
    const { isDeleting, checkboxSlot, contentSlot, actionsSlot } = props
    
    const itemClassName = cn(styles.item, isDeleting && styles.item__deleting)
    
    if (isDeleting) {
        return (
            <li className={itemClassName}>
                <div className={styles.item__placeholder} />
            </li>
        )
    }
    
    return (
        <li className={itemClassName}>
            {checkboxSlot}
            {contentSlot}
            {actionsSlot}
        </li>
    )
}