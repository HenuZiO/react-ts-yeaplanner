import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/1_app/App'
import { AppProviders } from '@/1_app/providers'

import '@/1_app/styles/style.css'

createRoot(document.getElementById('root')!)
    .render(
        <StrictMode>
            <AppProviders>
                <App />
            </AppProviders>
        </StrictMode>
    )
