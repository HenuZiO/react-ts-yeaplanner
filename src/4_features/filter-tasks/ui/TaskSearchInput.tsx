import React from 'react'
import { useAppDispatch, useAppSelector } from '@/1_app/store/lib/hooks'
import { setSearchQuery, selectSearchQuery } from '@/4_features/filter-tasks/model/filterSlice'
import { Input, Label } from '@/6_shared/ui'

import styles from './TaskSearchInput.module.css'

const TaskSearchInput = () => {
    const dispatch = useAppDispatch()
    const searchQuery = useAppSelector(selectSearchQuery)
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(event.target.value))
    }
    
    return (
        <form className={styles.tools__search}>
            <Label className='visually-hidden' htmlFor='task-search'>
                Поиск задач
            </Label>
            <Input
                className={styles.tools__input}
                id='task-search'
                variant='small'
                placeholder='Поиск задач...'
                value={searchQuery}
                onChange={handleChange}
            />
        </form>
    )
}

export default TaskSearchInput