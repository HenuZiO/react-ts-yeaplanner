import { useAppDispatch } from '@/6_shared/lib'
import { startDelete } from '../taskSlice'

export const useStartDelete = () => {
    const dispatch = useAppDispatch()
    
    return (id: string) => dispatch(startDelete(id))
}