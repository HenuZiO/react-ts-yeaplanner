export type TaskFilter = 'all' | 'active' | 'completed'

export interface FilterState {
    filter: TaskFilter
    searchQuery: string
}