import React, { useEffect } from 'react'
import { selectTheme } from '@/4_features/toggle-theme'
import { useAppSelector } from '@/6_shared/lib'

interface Props {
    children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
    const theme = useAppSelector(selectTheme)
    
    useEffect(() => {
        if (typeof document === 'undefined') return
        
        document.body.classList.remove('theme_light', 'theme_dark')
        document.body.classList.add(`theme_${theme}`)
    }, [theme]);
    
    return (
        <>{children}</>
    )
}