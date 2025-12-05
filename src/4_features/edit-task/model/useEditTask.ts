import { useAppDispatch } from '@/1_app/store/lib/hooks'
import { editTask } from '@/5_entities/task'

const useEditTask = () => {
    const dispatch = useAppDispatch()
    
    return (id: string, title: string) => {
        if (title.trim()) {
            dispatch(editTask({ id, title: title.trim() }))
        }
    }
}

export default useEditTask