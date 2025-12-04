import { TaskItem } from '@/entities/task'
import React from 'react'
import styles from './TaskList.module.css'

const TaskList = () => {
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.currentTarget)
    }
    
    return (
        <ul className={styles.task_list}>
            {new Array(10)
                .fill(null)
                .map((_, index) => (
                    <TaskItem onClick={handleClick} key={index} />
                ))}
        </ul>
    )
}

export default TaskList