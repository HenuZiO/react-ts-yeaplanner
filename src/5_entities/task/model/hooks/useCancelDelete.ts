import { cancelDelete } from '@/5_entities/task'
import { useAppDispatch } from '@/6_shared/lib'

export const useCancelDelete = () => {
    const dispatch = useAppDispatch()
    
    return () => dispatch(cancelDelete())
}