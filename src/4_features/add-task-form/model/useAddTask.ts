import { addTask } from '@/5_entities/task'
import { useAppDispatch } from '@/6_shared/lib'

export const useAddTask = () => {
    const dispatch = useAppDispatch()
    
    return (title: string) => {
        dispatch(addTask(title))
    }
}

