import { clearAllTasks } from '@/5_entities/task'
import { useAppDispatch } from '@/6_shared/lib'

export const useDeleteTasks = () => {
    const dispatch = useAppDispatch()
    
    return () => {
        dispatch(clearAllTasks())
    }
}