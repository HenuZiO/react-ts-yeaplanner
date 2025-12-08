import { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@/1_app/store/lib/hooks'
import { initTasks, selectTasks, type Task } from '@/5_entities/task'
import useLocalStorage from '@/6_shared/lib/hooks/useLocalStorage'

const useInitTasks = () => {
    const tasks = useAppSelector(selectTasks)
    const dispatch = useAppDispatch()
    
    const [storedTasks, setStoredTasks] = useLocalStorage<Task[]>('tasks', [])
    const isFirstRender = useRef(true)
    
    useEffect(() => {
        dispatch(initTasks(storedTasks))
        isFirstRender.current = true
    }, [dispatch, storedTasks])
    
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        
        setStoredTasks(tasks)
    }, [tasks, setStoredTasks])
    
    return null
}

export default useInitTasks