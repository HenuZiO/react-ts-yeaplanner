import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from '@/1_app/store'
import { StoreProvider } from './StoreProvider'
import { ThemeProvider } from './ThemeProvider'

interface Props {
    children: React.ReactNode
}

export const AppProviders = ({ children }: Props) => {
    return (
        <StoreProvider>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </PersistGate>
        </StoreProvider>
    )
}