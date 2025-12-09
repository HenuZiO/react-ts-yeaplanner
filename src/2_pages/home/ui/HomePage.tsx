import { Header } from '@/3_widgets/header'
import { AddTaskForm } from '@/3_widgets/task-form'
import { TaskList } from '@/3_widgets/task-list'
import { TaskTools } from '@/3_widgets/task-tools'
import { Container } from '@/6_shared/ui/'

const HomePage = () => {
    
    return (
        <>
            <Header />
            <main>
                <Container>
                    <AddTaskForm />
                    <TaskTools />
                    <TaskList />
                </Container>
            </main>
        </>
    )
}

export default HomePage