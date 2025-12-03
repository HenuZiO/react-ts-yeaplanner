import { router } from '@/app/router/createRoutes'
import { RouterProvider } from 'react-router/dom'

const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter