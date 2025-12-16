import { useState } from 'react'
import { TaskFilterSelect, TaskSearchInput } from '@/4_features/filter-tasks/'
import { DeleteTasksButton, useDeleteTasks } from '@/4_features/delete-tasks'
import { selectTasks, TaskStats } from '@/5_entities/task/'
import { useAppSelector } from '@/6_shared/lib'
import { Modal } from '@/6_shared/ui'

import styles from './TaskTools.module.css'

export const TaskTools = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tasks = useAppSelector(selectTasks)
  const handleDeleteAllTasks = useDeleteTasks()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  if (tasks.length === 0) return null

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
          <DeleteTasksButton onClick={openModal}>Удалить все</DeleteTasksButton>
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