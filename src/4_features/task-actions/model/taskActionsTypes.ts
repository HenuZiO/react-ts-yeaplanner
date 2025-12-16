import React from 'react'

export type TaskItemActionsProps = {
    isConfirming: boolean
    completed: boolean
    isEditing: boolean
    onEdit: (event: React.MouseEvent) => void
    onStartDelete: (event: React.MouseEvent) => void
    onConfirmDelete: (event: React.MouseEvent) => void
    onCancelDelete: (event: React.MouseEvent) => void
}