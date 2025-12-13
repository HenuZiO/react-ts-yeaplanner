import React, { useEffect, useRef, useState } from 'react'

type EditOptions = {
    initialValue: string
    onSave: (value: string) => void
    onCancel?: () => void
}

export const useInlineEdit = (options: EditOptions) => {
    const { initialValue, onSave, onCancel } = options
    
    const [isEditing, setIsEditing] = useState(false)
    const [editValue, setEditValue] = useState(initialValue)
    const inputRef = useRef<HTMLInputElement>(null)
    
    useEffect(() => {
        setEditValue(initialValue)
    }, [initialValue])
    
    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus()
            inputRef.current.select()
        }
    }, [isEditing]);
    
    const startEdit = () => {
        setIsEditing(true)
        setEditValue(initialValue)
    }
    
    const saveEdit = () => {
        const trimmedValue = editValue.trim()
        
        if (!trimmedValue) return
        
        if (trimmedValue !== initialValue) {
            onSave(trimmedValue)
        }
        
        setIsEditing(false)
    }
    
    const cancelEdit = () => {
        setEditValue(initialValue)
        setIsEditing(false)
        onCancel?.()
    }
    
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            saveEdit()
        } else if (event.key === 'Escape') {
            event.preventDefault()
            cancelEdit()
        }
    }
    
    const handleBlur = () => {
        saveEdit()
    }
    
    return {
        isEditing,
        editValue,
        inputRef,
        startEdit,
        setEditValue,
        saveEdit,
        cancelEdit,
        handleKeyDown,
        handleBlur
    }
}