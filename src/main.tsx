import StoreProvider from '@/app/providers/StoreProvider'
import ThemeProvider from '@/app/providers/ThemeProvider'
import { createRoot } from 'react-dom/client'
import '@/shared/styles/style.css'
import App from './app/App'

createRoot(document.getElementById('root')!)
    .render(
        // <StrictMode>
        <StoreProvider>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                  </StoreProvider>
        // </StrictMode>
    )
