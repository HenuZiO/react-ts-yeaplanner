import { useAppDispatch } from '@/1_app/store/lib/hooks'
import { clearAllTasks } from '@/5_entities/task'

const useDeleteTasks = () => {
    const dispatch = useAppDispatch()
    
    return () => {
        dispatch(clearAllTasks())
    }
}

export default useDeleteTasks