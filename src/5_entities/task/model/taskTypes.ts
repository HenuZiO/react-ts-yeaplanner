export type Task = {
    id: string
    title: string
    completed: boolean
}

export type TaskItemProps = {
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

export type TaskFormProps = {
    value: string
    submitLabel?: string
    onChange: (value: string) => void
    onSubmit: () => void
    onClear?: () => void
}