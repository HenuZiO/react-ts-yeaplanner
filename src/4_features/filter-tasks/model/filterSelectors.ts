import type { RootState } from '@/1_app/store'

export const selectFilter = (state: RootState) => state.filters.filter
export const selectSearchQuery = (state: RootState) => state.filters.searchQuery