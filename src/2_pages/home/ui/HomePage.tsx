import { Header } from '@/3_widgets/header'
import { AddTaskForm } from '@/3_widgets/task-form'
import { TaskList } from '@/3_widgets/task-list'
import { TaskTools } from '@/3_widgets/task-tools'
import Container from '@/6_shared/container/ui/Container'

const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <AddTaskForm />
                    <TaskTools />
                    <TaskList />
                    {/*<section className='empty'>*/}
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