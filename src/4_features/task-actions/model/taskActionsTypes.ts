export type TaskActionsProps = {
    taskId: string
}

export type TaskActionsState= {
    pendingDeleteId: string | null
    editingTaskId: string | null
    editDraft: string
    deletingTaskIds: Record<string, boolean>
}