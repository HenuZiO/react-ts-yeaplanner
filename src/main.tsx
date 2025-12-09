import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/1_app/App'
import StoreProvider from '@/1_app/providers/StoreProvider'
import ThemeProvider from '@/1_app/providers/ThemeProvider'

import '@/6_shared/styles/style.css'

createRoot(document.getElementById('root')!)
  .render(
        <StrictMode>
          <StoreProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </StoreProvider>
        </StrictMode>
  )
