import { startDelete } from '@/5_entities/task'
import { useAppDispatch } from '@/6_shared/lib'

export const useStartDelete = () => {
    const dispatch = useAppDispatch()
    
    return (id: string) => dispatch(startDelete(id))
}