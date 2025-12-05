import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '@/1_app/store/rootReducer'

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch