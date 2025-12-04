import { useAppDispatch } from '@/1_app/store/lib/hooks'
import { toggleTask } from '@/5_entities/task'

const useToggleTask = () => {
    const dispatch = useAppDispatch()
    
    return (id: string) => {
        dispatch(toggleTask(id))
    }
}

export default useToggleTask