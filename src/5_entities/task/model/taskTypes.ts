import React from 'react'

export interface Task {
    id: string
    title: string
    completed: boolean
}

export interface TaskProps {
    id: string
    title: string
    completed: boolean
    onToggle?: () => void
    onEdit?: (newTitle: string) => void
    onDelete?: () => void
    onStartDelete?: (id: string) => void
    onCancelDelete?: () => void
}

export interface TaskState {
    items: Task[]
    pendingDeleteId: string | null
}

export interface TaskItemActionsProps {
    isConfirming: boolean
    completed: boolean
    isEditing: boolean
    onEdit: (event: React.MouseEvent) => void
    onStartDelete: (event: React.MouseEvent) => void
    onConfirmDelete: (event: React.MouseEvent) => void
    onCancelDelete: (event: React.MouseEvent) => void
}