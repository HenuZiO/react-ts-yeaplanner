import React, { useRef, useState } from 'react'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'

import { IoMdClose } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";

import styles from './AddTaskForm.module.css'

const AddTaskForm = () => {
    const [title, setTitle] = useState('')
    const inputRef = useRef<HTMLInputElement | null>(null);
    
    const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    
    const handleClear = () => {
        setTitle('')
        inputRef.current?.focus()
    }
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }
    
    return (
        <form className={styles.todo_form} onSubmit={handleSubmit}>
            <div className={styles.todo_form__field}>
                <Label
                    className='visually-hidden'
                >
                    Введите название новой задачи
                </Label>
                <Input
                    className={styles.todo_form__input}
                    ref={inputRef}
                    value={title}
                    onChange={onTitleChange}
                    placeholder='Введите название новой задачи...'
                    required={true}
                />
                <Button
                    variant='clear'
                    onClick={handleClear}
                    aria-label='Очистить'
                >
                    {title && <IoMdClose size={16} />}
                </Button>
            </div>
            
            <Button className={styles.todo_form__button} type='submit'>
                <MdOutlineAddBox size={16} />
                <span>Добавить</span>
            </Button>
        </form>
    )
}

export default AddTaskForm