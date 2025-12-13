import { editTask } from '@/5_entities/task'
import { useAppDispatch } from '@/6_shared/lib'

export const useEditTask = () => {
    const dispatch = useAppDispatch()
    
    return (id: string, title: string) => {
        if (title.trim()) {
            dispatch(editTask({ id, title: title.trim() }))
        }
    }
}