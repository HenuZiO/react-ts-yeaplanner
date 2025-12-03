import styles from './TaskList.module.css'

interface Props {
}

const TaskList = (props: Props) => {
    const {} = props
    
    return (
        <div className={styles.task_list}>
            Это виджет TaskList - тут будет отрендерен список дел
        </div>
    )
}

export default TaskList