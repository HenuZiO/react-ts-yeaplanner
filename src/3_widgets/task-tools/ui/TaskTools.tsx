import { useState } from 'react'
import { useDeleteTasks } from '@/4_features/delete-all-tasks'
import { ColorText } from '@/6_shared/color-text'
import { Button } from '@/6_shared/ui/button'
import { Input } from '@/6_shared/ui/input'
import { Label } from '@/6_shared/ui/label'
import { Select } from '@/6_shared/ui/select'

import styles from './TaskTools.module.css'

const TaskTools = () => {
    const [filter, setFilter] = useState('all')
    
    const handleDeleteAllTasks = useDeleteTasks()
    
    return (
        <section className={styles.tools}>
            <div className={styles.tools__header}>
                <div className={styles.tools__stats}>
                    <ColorText className={styles.tools__stat} color='blue'>
                        Всего задач
                        <span className={styles.tools__counter}>0</span>
                    </ColorText>
                    <span className={styles.tools__divider}>|</span>
                    <ColorText className={styles.tools__stat} color='purple'>
                        Выполнено
                        <span className={styles.tools__counter}>0</span>
                    </ColorText>
                </div>
                <form className={styles.tools__search}>
                    <Label className='visually-hidden' htmlFor='task-search'>
                        Поиск задач
                    </Label>
                    <Input
                        className={styles.tools__input}
                        id='task-search'
                        variant='small'
                        placeholder='Поиск задач...'
                    />
                </form>
            </div>
            
            <div className={styles.tools__controls}>
                <h2 className={styles.tools__title}>Список задач</h2>
                <Label className='visually-hidden' htmlFor='task-filter'>
                    Фильтр задач
                </Label>
                <Select
                    id='task-filter'
                    value={filter}
                    onChange={event => setFilter(event.target.value)}
                    aria-label='Фильтр задач'
                >
                    <option value='all'>Все</option>
                    <option value='active'>Активные</option>
                    <option value='completed'>Выполненные</option>
                </Select>
                <Button
                    className={styles.tools__button}
                    variant='purple'
                    onClick={handleDeleteAllTasks}
                >
                    Удалить все
                </Button>
            </div>
        </section>
    )
}

export default TaskTools