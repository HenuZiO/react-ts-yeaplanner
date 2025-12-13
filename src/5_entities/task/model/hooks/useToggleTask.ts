import { useAppDispatch } from '@/6_shared/lib'
import { toggleTask } from '../taskSlice'

export const useToggleTask = () => {
    const dispatch = useAppDispatch()
    
    return (id: string) => {
        dispatch(toggleTask(id))
    }
}