import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/1_app/store/lib/hooks'
import { selectTheme, setTheme, type Theme } from '@/4_features/theme-switcher/'
import useLocalStorage from '@/6_shared/lib/useLocalStorage'

interface Props {
    children: React.ReactNode
}

const ThemeProvider = ({ children }: Props) => {
    const theme = useAppSelector(selectTheme)
    const dispatch = useAppDispatch()
    
    const [storedTheme, setStoredTheme] = useLocalStorage<Theme>('theme', 'dark')
    
    useEffect(() => {
        dispatch(setTheme(storedTheme))
    }, [dispatch, storedTheme]);
    
    useEffect(() => {
        setStoredTheme(theme)
        document.body.classList.remove('theme_light', 'theme_dark')
        document.body.classList.add(`theme_${theme}`)
    }, [theme, setStoredTheme])
    
    return <>{children}</>
}

export default ThemeProvider