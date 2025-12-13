import { deleteTask } from '@/5_entities/task'
import { useAppDispatch } from '@/6_shared/lib'

export const useDeleteTask = () => {
    const dispatch = useAppDispatch()
    
    return (id: string) => {
        dispatch(deleteTask(id))
    }
}