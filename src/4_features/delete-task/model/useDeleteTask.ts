import { useAppDispatch } from '@/1_app/store/lib/hooks'
import { deleteTask } from '@/5_entities/task/model/taskSlice'

const useDeleteTask = () => {
    const dispatch = useAppDispatch()
    
    return (id: string) => {
        dispatch(deleteTask(id))
    }
}

export default useDeleteTask