import { RouterProvider, createBrowserRouter } from "react-router"
import { ThemeProvider } from "@/context/theme-provider"

import Layout from '@/routes/layout'
import Home from "@/routes/home"
import Skills from '@/routes/skills'
import JobHistory from '@/routes/jobhistory'
import NoPage from "@/routes/nopage"

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "skills",
          Component: Skills,
        },
        {
          path: "jobhistory",
          Component: JobHistory,
        },
      ],
      errorElement: <NoPage />,
    },
  ], { basename: "/apps/portfolio" })

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

