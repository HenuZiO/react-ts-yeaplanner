import { useAppDispatch } from '@/6_shared/lib'
import { editTask } from '../taskSlice'

export const useEditTask = () => {
    const dispatch = useAppDispatch()
    
    return (id: string, title: string) => {
        if (title.trim()) {
            dispatch(editTask({ id, title: title.trim() }))
        }
    }
}