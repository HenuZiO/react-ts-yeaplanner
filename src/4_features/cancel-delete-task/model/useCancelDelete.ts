import { useAppDispatch } from '@/1_app/store/lib/hooks'
import { cancelDelete } from '@/5_entities/task'

const useCancelDelete = () => {
    const dispatch = useAppDispatch()
    
    return () => dispatch(cancelDelete())
}

export default useCancelDelete