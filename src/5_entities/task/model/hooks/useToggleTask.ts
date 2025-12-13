import { toggleTask } from '@/5_entities/task'
import { useAppDispatch } from '@/6_shared/lib'

export const useToggleTask = () => {
    const dispatch = useAppDispatch()
    
    return (id: string) => {
        dispatch(toggleTask(id))
    }
}