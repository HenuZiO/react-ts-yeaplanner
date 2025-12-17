import { TaskActions, TaskToggle, TaskTitleEditor, selectIsTaskDeleting } from '@/4_features/task-actions'
import { TaskItem } from '@/5_entities/task'
import { useAppSelector } from '@/6_shared/lib'

export const TaskListRow = ({ taskId }: { taskId: string }) => {
    const isDeleting = useAppSelector(state => selectIsTaskDeleting(state, taskId))
    
    return (
        <TaskItem
            isDeleting={isDeleting}
            checkboxSlot={<TaskToggle taskId={taskId} />}
            contentSlot={<TaskTitleEditor taskId={taskId} />}
            actionsSlot={<TaskActions taskId={taskId} />}
        />
    )
}