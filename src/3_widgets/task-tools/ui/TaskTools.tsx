import { useState } from 'react'
import { useAppSelector } from '@/1_app/store/lib/hooks'
import { TaskFilterSelect, TaskSearchInput } from '@/4_features/filter-tasks/'
import { useDeleteTasks } from '@/4_features/delete-all-tasks'
import { selectTasks, TaskStats } from '@/5_entities/task/'
import { Button, Modal } from '@/6_shared/ui'

import { FaRegTrashCan } from "react-icons/fa6";

import styles from './TaskTools.module.css'

const TaskTools = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const tasks = useAppSelector(selectTasks)
    const handleDeleteAllTasks = useDeleteTasks()
    
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)
    
    if (tasks.length === 0) {
        return null
    }
    
    return (
        <>
            <section className={styles.tools}>
                <div className={styles.tools__header}>
                    <TaskStats />
                    <TaskSearchInput />
                </div>
            
                <div className={styles.tools__controls}>
                    <h2 className={styles.tools__title}>Список задач</h2>
                    <TaskFilterSelect />
                    <Button
                        className={styles.tools__button}
                        variant='purple'
                        onClick={openModal}
                    >
                        <FaRegTrashCan size={14} />
                        <span>Удалить все</span>
                    </Button>
                </div>
            </section>
            
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                onConfirm={handleDeleteAllTasks}
                title='Очистить список'
                message='Вы действительно хотите удалить все задачи?'
            />
        </>
    
    )
}

export default TaskTools