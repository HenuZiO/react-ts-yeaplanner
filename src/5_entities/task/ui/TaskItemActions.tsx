import type { TaskItemActionsProps } from '@/5_entities/task'
import { cn } from '@/6_shared/lib'

import { IoIosCheckmarkCircle, IoMdClose } from 'react-icons/io'
import { FiEdit3 } from 'react-icons/fi'
import { MdOutlineDelete } from 'react-icons/md'

import styles from './TaskItem.module.css'

export const TaskItemActions = (props: TaskItemActionsProps) => {
    const {
        isConfirming,
        completed,
        isEditing,
        onEdit,
        onStartDelete,
        onConfirmDelete,
        onCancelDelete
    } = props
    
    return (
        <div className={styles.task__actions}>
            {isConfirming ? (
                <button
                    className={styles.task__confirm}
                    type='button'
                    onClick={onConfirmDelete}
                    aria-label='Подтвердить удаление'
                    title='Подтвердить удаление'
                >
                    <span className={styles.task__icon}>
                        <IoIosCheckmarkCircle size={18} />
                    </span>
                </button>
            ) : (
                <button
                    className={cn(styles.task__edit, (completed || isEditing) && styles.task__edit_hidden)}
                    type='button'
                    onClick={onEdit}
                    aria-label='Редактировать'
                    title='Редактировать'
                >
                    <span className={styles.task__icon}>
                        <FiEdit3 size={18} />
                    </span>
                </button>
            )}
            
            {isConfirming ? (
                <button
                    className={styles.task__cancel}
                    type='button'
                    onClick={onCancelDelete}
                    aria-label='Отменить удаление'
                    title='Отменить удаление'
                >
                    <span className={styles.task__icon}>
                        <IoMdClose size={18} />
                    </span>
                </button>
            ) : (
                <button
                    className={styles.task__delete}
                    type='button'
                    onClick={onStartDelete}
                    aria-label='Удалить'
                    title='Удалить'
                >
                    <span className={styles.task__icon}>
                        <MdOutlineDelete size={18} />
                    </span>
                </button>
            )}
        </div>
    )
}
