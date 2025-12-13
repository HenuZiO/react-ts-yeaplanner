import React from 'react'
import { StoreProvider } from '@/1_app/providers/store/StoreProvider'
import { AppInitializer } from '@/1_app/providers/app/AppInitializer'
import { ThemeProvider } from '@/1_app/providers/theme/ThemeProvider'

interface Props {
    children: React.ReactNode
}

export const AppProviders = ({ children }: Props) => {
    return (
        <StoreProvider>
            <AppInitializer>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </AppInitializer>
        </StoreProvider>
    )
}