import { useCallback, useEffect, useState } from 'react'

type UseLocalStorageReturn<T> = [T, (value: T | ((prev: T) => T)) => void]

export const useLocalStorage = <T, >(key: string, initialValue: T): UseLocalStorageReturn<T> => {
    const getStoredValue = useCallback((): T => {
        if (typeof window === 'undefined' || !window.localStorage) return initialValue
        
        try {
            const item = localStorage.getItem(key)
            return item ? JSON.parse(item) as T : initialValue
        } catch (error) {
            console.warn(`[useLocalStorage:${key}] read error:`, error)
            return initialValue
        }
    }, [key, initialValue])
    
    const [value, setValue] = useState<T>(getStoredValue)
    
    const setStoredValue = useCallback(
        (newValue: T | ((prev: T) => T)) => {
            setValue(prev => {
                const valueToStore = newValue instanceof Function ? newValue(prev) : newValue
                
                try {
                    localStorage.setItem(key, JSON.stringify(valueToStore))
                } catch (error) {
                    console.warn(`[useLocalStorage:${key}] write error:`, error)
                }
                
                return valueToStore
            })
        },
        [key]
    )
    // Инициализация ключа при первом монтировании
    
    useEffect(() => {
        try {
            if (localStorage.getItem(key) === null) {
                localStorage.setItem(key, JSON.stringify(initialValue))
            }
        } catch (error) {
            console.warn(`[useLocalStorage:${key}] init write error:`, error)
        }
    }, [key, initialValue])
    
    // Слушатель изменений localStorage между вкладками
    
    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === key) {
                try {
                    setValue(event.newValue ? (JSON.parse(event.newValue) as T) : initialValue)
                } catch {
                    setValue(initialValue)
                }
            }
        }
        
        window.addEventListener('storage', handleStorageChange)
        
        return () => window.removeEventListener('storage', handleStorageChange)
    }, [key, initialValue])
    
    return [value, setStoredValue]
}