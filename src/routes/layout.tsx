import { NavLink, Outlet } from "react-router"
import Header from "@/components/header";
// import Sidebar from "@/components/sidebar";


export default function Layout() {
  return (
    <div className="mx-auto max-w-[1024px]">
      <div className="mt-2 mx-2">
        <Header />
        <div className="mt-2 flex gap-3">
          <nav className="flex flex-col gap-2">
            <NavLink to="/" className={({ isActive }) =>
              [
                isActive ? "bg-slate-500" : "",
                "p-3 rounded-r-full text-nowrap"
              ].join(" ")
            }>Overview</NavLink>
            <NavLink to="/skills" className={({ isActive }) =>
              [
                isActive ? "bg-slate-500" : "",
                "p-3 rounded-r-full text-nowrap"
              ].join(" ")
            }>Skills</NavLink>
            <NavLink to="/jobhistory" className={({ isActive }) =>
              [
                isActive ? "bg-slate-500" : "",
                "p-3 rounded-r-full text-nowrap"
              ].join(" ")
            }>Job History</NavLink>
          </nav>
          {/* <Sidebar /> */}
          <Outlet />
        </div>
      </div>
    </div>
  )
}
