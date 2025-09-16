import { RouterProvider, createBrowserRouter } from "react-router"
import { ThemeProvider } from "@/context/theme-provider"

import Root from "@/routs/root"
import Home from "@/components/home"
// import Layout from "@/routs/layout"
import NoPage from "@/routs/nopage"

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: <Root />,
      children: [
        {
          index: true,
          Component: <Home />,
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

