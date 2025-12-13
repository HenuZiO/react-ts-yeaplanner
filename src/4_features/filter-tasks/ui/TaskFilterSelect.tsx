import React from 'react'
import { useAppDispatch, useAppSelector } from '@/6_shared/lib'
import { Label, Select } from '@/6_shared/ui'
import { setFilter, selectFilter } from '../model/filterSlice'
import type { TaskFilter } from '../model/filterTypes'

const filterOptions: { value: TaskFilter; label: string }[] = [
    { value: 'all', label: 'Все' },
    { value: 'active', label: 'Активные' },
    { value: 'completed', label: 'Выполненные' }
]

export const TaskFilterSelect = () => {
    const dispatch = useAppDispatch()
    const currentFilter = useAppSelector(selectFilter)
    
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setFilter(event.target.value as TaskFilter))
    }
    
    return (
        <>
            <Label className='visually-hidden' htmlFor='task-filter'>
                Фильтр задач
            </Label>
            
            <Select
                id='task-filter'
                value={currentFilter}
                onChange={handleChange}
                aria-label='Фильтр задач'
            >
                {filterOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Select>
        </>
    )

}