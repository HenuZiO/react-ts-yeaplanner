import { useEffect, useRef, useState } from 'react'

interface DeleteConfirmationOptions {
    onDelete: () => void
    animationDuration?: number
}

const useDeleteConfirmation = (options: DeleteConfirmationOptions) => {
    const { onDelete, animationDuration = 300 } = options
    
    const [isDeleting, setIsDeleting] = useState(false)
    const timerRef = useRef<number | null>(null)
    
    const confirmDelete = () => {
        if (timerRef.current !== null) {
            clearTimeout(timerRef.current)
        }
        
        setIsDeleting(true)
        
        timerRef.current = window.setTimeout(() => {
            onDelete()
            timerRef.current = null
        }, animationDuration)
    }
    
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current)
            }
        }
    }, [])
    
    return { isDeleting, confirmDelete }
}

export default useDeleteConfirmation