import { Header } from '@/3_widgets/header'
import { TaskList } from '@/3_widgets/task-list'
import { TaskTools } from '@/3_widgets/task-tools'
import { AddTaskForm } from '@/4_features/add-task-form'
import { Container } from '@/6_shared/ui/'

export const HomePage = () => {
    
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