import { useAppDispatch } from '@/6_shared/lib'
import { cancelDelete } from '../taskSlice'

export const useCancelDelete = () => {
    const dispatch = useAppDispatch()
    
    return () => dispatch(cancelDelete())
}