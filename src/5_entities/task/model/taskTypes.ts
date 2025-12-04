export interface Task {
    id: string
    title: string
    completed: boolean
}

export interface TaskProps {
    title: string
    completed: boolean
    onToggle?: () => void
    onEdit?: () => void
    onDelete?: () => void
}

export interface TaskState {
    items: Task[]
}