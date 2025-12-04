import StoreProvider from '@/1_app/providers/StoreProvider'
import ThemeProvider from '@/1_app/providers/ThemeProvider'
import { createRoot } from 'react-dom/client'
import '@/6_shared/styles/style.css'
import App from '@/1_app/App'

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
