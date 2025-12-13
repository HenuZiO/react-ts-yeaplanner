import React, { useRef } from 'react'
import { selectSearchQuery, setSearchQuery } from '@/4_features/filter-tasks'
import { useAppDispatch, useAppSelector } from '@/6_shared/lib'
import { Button, Input, Label } from '@/6_shared/ui'

import { IoMdClose } from 'react-icons/io'

import styles from './TaskSearchInput.module.css'

export const TaskSearchInput = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useAppDispatch()
    const searchQuery = useAppSelector(selectSearchQuery)
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(event.target.value))
    }
    
    const handleClear = () => {
        dispatch(setSearchQuery(''))
        inputRef.current?.focus()
    }
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }
    
    return (
        <form className={styles.tools__search} onSubmit={onSubmit}>
            <Label className='visually-hidden' htmlFor='task-search'>
                Поиск задач
            </Label>
            
            <Input
                className={styles.tools__input}
                id='task-search'
                ref={inputRef}
                variant='small'
                placeholder='Поиск задач...'
                value={searchQuery}
                onChange={handleChange}
            />
            
            <Button
                className={styles.tools__clear}
                variant='clear'
                onClick={handleClear}
                aria-label='Очистить'
            >
                {searchQuery && <IoMdClose size={16} />}
            </Button>
        </form>
    )
}