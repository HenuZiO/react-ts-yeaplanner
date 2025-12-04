import { RouterProvider } from 'react-router/dom'
import { router } from '@/app/router/createRoutes'

const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter