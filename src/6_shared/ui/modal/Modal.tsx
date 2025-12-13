import React from 'react'
import { createPortal } from 'react-dom'
import { Button } from '@/6_shared/ui'

import styles from './Modal.module.css'

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    title: string
    message: string
    confirmText?: string
    cancelText?: string
}

export const Modal = (props: ModalProps) => {
    const { isOpen, onClose, onConfirm, title, message, confirmText = 'Подтвердить', cancelText = 'Отменить' } = props
    
    if (!isOpen) return null
    
    const handleConfirm = () => {
        onConfirm()
        onClose()
    }
    
    const handleCancel = () => {
        onClose()
    }
    
    const handleBackdropClick = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            onClose()
        }
    }
    
    const modalContent = (
        <div className={styles.modal__overlay} onClick={handleBackdropClick}>
            <div className={styles.modal__content}>
                <h2 className={styles.modal__title}>
                    {title}
                </h2>
                <p className={styles.modal__message}>
                    {message}
                </p>
                <div className={styles.modal__actions}>
                    <Button variant='outlined' onClick={handleCancel}>
                        {cancelText}
                    </Button>
                    <Button variant='purple' onClick={handleConfirm}>
                        {confirmText}
                    </Button>
                </div>
            </div>
        </div>
    )
    
    return createPortal(modalContent, document.body)
}