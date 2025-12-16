import  {  useState } from 'react'
import { TaskForm } from '@/5_entities/task'
import { useAddTask } from '../model/useAddTask'

export const AddTaskForm = () => {
    const [title, setTitle] = useState('')
    const addTask = useAddTask()
    
    const handleClear = () => {
        setTitle('')
    }
    
    const handleSubmit = () => {
        addTask(title)
        setTitle('')
    }
    
    return (
        <TaskForm value={title} onChange={setTitle} onSubmit={handleSubmit} onClear={handleClear}/>
    )
}