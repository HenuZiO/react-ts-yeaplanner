import { useAppDispatch } from '@/1_app/store/lib/hooks'
import { startDelete } from '@/5_entities/task'

const useStartDelete = () => {
    const dispatch = useAppDispatch()
    
    return (id: string) => dispatch(startDelete(id))
}

export default useStartDelete