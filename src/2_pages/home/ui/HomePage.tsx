import { Header } from '@/3_widgets/header'
import { AddTaskForm } from '@/3_widgets/task-form'
import { TaskTools } from '@/3_widgets/task-tools'
import { TaskList } from '@/3_widgets/task-list'
import Container from '@/6_shared/container/ui/Container'

const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <AddTaskForm />
                    <TaskTools />
                    {/*<section className='todo-bar'>*/}
                    {/*  <div className='todo-bar__stats'>*/}
                    {/*    <span className='todo-bar__stat text-blue'>*/}
                    {/*      Всего задач*/}
                    {/*      <span className='todo-bar__stat-counter' data-js-todo-total-tasks-counter> 0 </span>*/}
                    {/*    </span>*/}
                    {/*    <span className='todo-bar__divider'>|</span>*/}
                    {/*    <span className='todo-bar__stat text-purple'>*/}
                    {/*      Выполнено*/}
                    {/*      <span*/}
                    {/*          className='todo-bar__stat-counter'*/}
                    {/*          data-js-todo-completed-tasks-counter*/}
                    {/*      > 0 </span>*/}
                    {/*    </span>*/}
                    {/*  </div>*/}
                    
                    {/*  <form className='todo-bar__search'>*/}
                    {/*    <div className='todo-bar__field input-field'>*/}
                    {/*      <label htmlFor='search-tasks' className='visually-hidden'>Поиск задач</label>*/}
                    {/*      <input*/}
                    {/*          className='todo-bar__search-input input input--small'*/}
                    {/*          id='search-tasks'*/}
                    {/*          type='search'*/}
                    {/*          placeholder='Поиск задач...'*/}
                    {/*          autoComplete='off'*/}
                    {/*          data-js-todo-search-task-input*/}
                    {/*      />*/}
                    {/*      <button*/}
                    {/*          className='input-clear'*/}
                    {/*          type='button'*/}
                    {/*          aria-label='Очистить'*/}
                    {/*          data-js-todo-search-clear*/}
                    {/*      ></button>*/}
                    {/*    </div>*/}
                    {/*  </form>*/}
                    {/*</section>*/}
                    
                    <section className='todos'>
                      {/*<div className='todos__header'>*/}
                      {/*  <h2 className='todos__title'>Список задач</h2>*/}
                      {/*  <label*/}
                      {/*      htmlFor='filter-tasks'*/}
                      {/*      className='visually-hidden'*/}
                      {/*  >Фильтр задач</label>*/}
                      {/*  <select*/}
                      {/*      className='todos__filter select'*/}
                      {/*      id='filter-tasks'*/}
                      {/*      data-js-todo-filter*/}
                      {/*      aria-label='Фильтр задач'*/}
                      {/*  >*/}
                      {/*    <option value='all'>Все</option>*/}
                      {/*    <option value='active'>Активные</option>*/}
                      {/*    <option value='completed'>Выполненные</option>*/}
                      {/*  </select>*/}
                      {/*  <button*/}
                      {/*      className='todos__delete-all button button--purple'*/}
                      {/*      type='button'*/}
                      {/*      data-js-todo-delete-all-button*/}
                      {/*  >*/}
                      {/*    Удалить все*/}
                      {/*  </button>*/}
                      {/*</div>*/}
                      <TaskList />
                    </section>
                    {/*<section className='empty' data-js-todo-empty-message>*/}
                    {/*  <img src='/icons/task-list.png' alt='Пустой список' width='56' height='56' />*/}
                    {/*  <div className='empty__text'>*/}
                    {/*    <h2 className='empty__title'>Список задач пуст</h2>*/}
                    {/*    <p className='empty__description'>*/}
                    {/*      Добавьте новые задачи или попробуйте изменить условия поиска*/}
                    {/*    </p>*/}
                    {/*  </div>*/}
                    {/*</section>*/}
                </Container>
            </main>
        </>
    )
}

export default HomePage