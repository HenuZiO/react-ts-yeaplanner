import React, { useEffect, useRef } from 'react'
import { selectTheme, setTheme } from '@/4_features/theme-switcher'
import type { Theme } from '@/4_features/theme-switcher'
import { useLocalStorage, useAppDispatch, useAppSelector } from '@/6_shared/lib'

interface Props {
    children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
    const theme = useAppSelector(selectTheme)
    const dispatch = useAppDispatch()
    
    const [storedTheme, setStoredTheme] = useLocalStorage<Theme>('theme', 'dark')
    const isInitialMount = useRef(false)
    
    useEffect(() => {
        dispatch(setTheme(storedTheme))
    }, [dispatch, storedTheme]);
    
    useEffect(() => {
        if (isInitialMount.current) {
            setStoredTheme(theme)
            document.body.classList.remove('theme_light', 'theme_dark')
            document.body.classList.add(`theme_${theme}`)
        }
        
        isInitialMount.current = true
    }, [theme, setStoredTheme])
    
    return <>{children}</>
}