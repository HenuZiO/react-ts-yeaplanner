import type React from 'react'

export type Task = {
    id: string
    title: string
    completed: boolean
}

export type TaskState = {
    items: Task[]
}

export type TaskItemProps = {
    isDeleting?: boolean
    checkboxSlot?: React.ReactNode
    contentSlot?: React.ReactNode
    actionsSlot?: React.ReactNode
}

export type TaskFormProps = {
    value: string
    submitLabel?: string
    onChange: (value: string) => void
    onSubmit: () => void
    onClear?: () => void
}