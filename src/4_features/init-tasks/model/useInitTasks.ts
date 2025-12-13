import { useEffect, useRef } from 'react'
import { initTasks, selectTasks } from '@/5_entities/task'
import type { Task } from '@/5_entities/task'
import { useAppDispatch, useAppSelector, useLocalStorage } from '@/6_shared/lib'

export const useInitTasks = () => {
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