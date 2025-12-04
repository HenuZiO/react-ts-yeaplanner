import styles from './TaskItem.module.css'

interface Props {
}

const TaskItem = (props: Props) => {
    const {} = props
    
    return (
        <div className={styles.task_item}>TaskItem</div>
    )
}

export default TaskItem