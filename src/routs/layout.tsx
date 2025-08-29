import Career from "@/components/career";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";


export default function Layout() {
  return (
    <div className="container mx-auto">
        <Header />
        <div className="mt-2 sm:mx-2 flex gap-3">
          <Sidebar />
          <Career />
        </div>
      </div>
  )
}
