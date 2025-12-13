import styles from './TaskListEmpty.module.css'

export const TaskListEmpty = () => {
    return (
        <div className={styles.empty}>
            <img src='/icons/task-list.png' alt='Пустой список' width='56' height='56' />
            <div className={styles.empty__text}>
                <h2 className={styles.empty__title}>Список задач пуст</h2>
                <p className={styles.empty__description}>
                    Добавьте новые задачи или попробуйте изменить условия поиска
                </p>
            </div>
        </div>
    );
};