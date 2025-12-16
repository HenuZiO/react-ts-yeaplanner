import React from 'react'

export type Task = {
    id: string
    title: string
    completed: boolean
}

export type TaskProps = {
    id: string
    title: string
    completed: boolean
    onToggle?: () => void
    onEdit?: (newTitle: string) => void
    onDelete?: () => void
    onStartDelete?: (id: string) => void
    onCancelDelete?: () => void
}

export type TaskState = {
    items: Task[]
    pendingDeleteId: string | null
}

export type TaskItemActionsProps = {
    isConfirming: boolean
    completed: boolean
    isEditing: boolean
    onEdit: (event: React.MouseEvent) => void
    onStartDelete: (event: React.MouseEvent) => void
    onConfirmDelete: (event: React.MouseEvent) => void
    onCancelDelete: (event: React.MouseEvent) => void
}

export type TaskFormProps = {
    value: string
    submitLabel?: string
    onChange: (value: string) => void
    onSubmit: () => void
    onClear?: () => void
}