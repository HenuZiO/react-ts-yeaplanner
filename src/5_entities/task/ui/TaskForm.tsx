import React, { useRef } from 'react'
import { Button, Input } from '@/6_shared/ui'
import type { TaskFormProps } from '../model/taskTypes'

import { IoMdClose } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";

import styles from './TaskForm.module.css'

export const TaskForm = (props: TaskFormProps) => {
    const { value, submitLabel = 'Добавить' ,onChange, onSubmit, onClear } = props
    
    const inputRef = useRef<HTMLInputElement | null>(null);
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit()
        inputRef.current?.focus()
    }
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }
    
    const handleClear = () => {
        onClear?.()
        inputRef.current?.focus()
    }
    
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Escape') {
            onClear?.()
            inputRef.current?.blur()
        }
    }
    
    return (
        <form className={styles.task_form} onSubmit={handleSubmit}>
            <div className={styles.task_form__field}>
                <Input
                    className={styles.task_form__input}
                    ref={inputRef}
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder='Введите название задачи...'
                    required={true}
                />
                
                {onClear && (
                    <Button
                        className={styles.task_form__clear}
                        variant='clear'
                        onClick={handleClear}
                        aria-label='Очистить поле'
                        title='Очистить поле'
                    >
                    {value && <IoMdClose size={16} />}
                </Button>
                )}
            </div>
            
            <Button
                className={styles.task_form__button}
                type='submit'
                variant='blue'
                aria-label={`${submitLabel} задачу`}
                title={`${submitLabel} задачу`}
            >
                <MdOutlineAddBox size={16} />
                <span>{submitLabel}</span>
            </Button>
        </form>
    )
}