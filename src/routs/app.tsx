import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router';
import { ThemeProvider } from "@/context/theme-provider"
import Layout from '@/routs/layout';
import NoPage from '@/routs/nopage';
import Home from '@/components/home';

export default function App() {
const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home  />,
        },
        {
          path: "/",
          element: <Home />,
        },
      ],
      errorElement: <NoPage />,
    },
  ], { basename: '/apps/portfolio' })

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

