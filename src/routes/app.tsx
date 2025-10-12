import { RouterProvider, createBrowserRouter, type RouteObject } from "react-router"
import { ThemeProvider } from "@/context/theme-provider"

import Layout from '@/routes/layout'
import Home from "@/routes/home"
import Skills from '@/routes/skills'
import JobHistory from '@/routes/jobhistory'
import NoPage from "@/routes/nopage"

import { loadSkills } from "@/lib/loaders"

export default function App() {
  // const router = createBrowserRouter([
  const router: RouteObject[] = [
    {
      path: "/",
      Component: Layout,
      hydrateFallbackElement: (<p>Loading...</p>),
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "skills",
          Component: Skills,
          loader: loadSkills,
        },
        {
          path: "jobhistory",
          Component: JobHistory,
        },
      ],
      errorElement: <NoPage />,
    },
  ]
  // ,{ basename: "/apps/porTfolio" })

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={createBrowserRouter(router, { basename: "/apps/portfolio" })} />
    </ThemeProvider>
  )
}

