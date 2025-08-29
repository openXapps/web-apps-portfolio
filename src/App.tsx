import { ThemeProvider } from "@/context/theme-provider"
import Header from "@/components/header"
// import AboutMe from "@/components/about-me"
import Career from "@/components/career"
import Sidebar from '@/components/sidebar'

export default function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container mx-auto">
        <Header />
        <div className="mt-2 sm:mx-2 flex gap-3">
          <Sidebar />
          <Career />
        </div>
      </div>
    </ThemeProvider>
  )
}

