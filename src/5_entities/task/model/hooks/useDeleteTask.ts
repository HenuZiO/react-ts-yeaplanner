import { useAppDispatch } from '@/6_shared/lib'
import { deleteTask } from '../taskSlice'

export const useDeleteTask = () => {
    const dispatch = useAppDispatch()
    
    return (id: string) => {
        dispatch(deleteTask(id))
    }
}