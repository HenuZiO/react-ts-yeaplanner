import React from 'react'
import { useInitTasks } from '@/4_features/init-tasks'

interface Props {
    children: React.ReactNode
}

export const AppInitializer = ({ children }: Props) => {
    useInitTasks()
    
    return (
        <>{children}</>
    )
}