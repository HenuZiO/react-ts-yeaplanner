import { useAppDispatch } from '@/1_app/store/lib/hooks'
import { addTask } from '@/5_entities/task/model/taskSlice'

const useAddTask = () => {
    const dispatch = useAppDispatch()
    
    return (title: string) => {
        dispatch(addTask(title))
    }
}

export default useAddTask