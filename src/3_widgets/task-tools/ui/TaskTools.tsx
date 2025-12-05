const TaskTools = () => {
    return (
        <section className='todo-bar'>
            <div className='todo-bar__stats'>
                <span className='todo-bar__stat text-blue'>
                    Всего задач
                    <span className='todo-bar__stat-counter'>0</span>
                </span>
                <span className='todo-bar__divider'>|</span>
                <span className='todo-bar__stat text-purple'>
                    Выполнено
                    <span className='todo-bar__stat-counter'> 0 </span>
                </span>
            </div>
            
            <form className='todo-bar__search'>
                <div className='todo-bar__field input-field'>
                    <label htmlFor='search-tasks' className='visually-hidden'>
                        Поиск задач
                    </label>
                    <input
                        className='todo-bar__search-input input input--small'
                        type='search'
                        placeholder='Поиск задач...'
                    />
                    <button
                        className='input-clear'
                        type='button'
                        aria-label='Очистить'
                    ></button>
                </div>
            </form>
            
            <div className='todos__header'>
                <h2 className='todos__title'>Список задач</h2>
                <label htmlFor='filter-tasks' className='visually-hidden'>
                    Фильтр задач
                </label>
                <select
                    className='todos__filter select'
                    aria-label='Фильтр задач'
                >
                    <option value='all'>Все</option>
                    <option value='active'>Активные</option>
                    <option value='completed'>Выполненные</option>
                </select>
                <button
                    className='todos__delete-all button button--purple'
                    type='button'
                >
                    Удалить все
                </button>
            </div>
        </section>
    )
}

export default TaskTools