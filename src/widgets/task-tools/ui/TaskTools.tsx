import styles from './TaskTools.module.css'

interface Props {
}

const TaskTools = (props: Props) => {
    const {} = props
    
    return (
        <div className={styles.task_tools}>
            Это виджет TaskTools - тут будет статистика по заданиям, поиск по задаче, список фильтров и кнопка "Удалить все"
        </div>
    )
}

export default TaskTools