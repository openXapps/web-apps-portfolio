import { NavLink, Outlet } from "react-router"
import LayoutHeader from "@/components/layout-header";

export default function Layout() {
  return (
    <div className="mx-auto max-w-[1024px]">
      <div className="mt-2 mb-2 mx-2">
        <LayoutHeader />
        <div className="mt-2 flex gap-3">
          <nav className="flex flex-col gap-2 min-w-[110px]">
            <NavLink to="/" className={({ isActive }) =>
              [
                isActive ? "bg-slate-500" : "",
                "p-3 rounded-r-full text-nowrap"
              ].join(" ")
            }>Overview</NavLink>
            <NavLink to="/skills" className={({ isActive, isPending }) =>
              [
                isActive ? "bg-slate-500" : "",
                isPending ? "animate-pulse" : "",
                "p-3 rounded-r-full text-nowrap"
              ].join(" ")
            }>{({ isPending }) => (isPending ? "Loading..." : "Skills")}</NavLink>
            <NavLink to="/jobhistory" className={({ isActive, isPending }) =>
              [
                isActive ? "bg-slate-500" : "",
                isPending ? "animate-pulse" : "",
                "p-3 rounded-r-full text-nowrap"
              ].join(" ")
            }>{({ isPending }) => (isPending ? "Loading..." : "Job History")}</NavLink>
          </nav>
          {/* <Sidebar /> */}
          <Outlet />
        </div>
      </div>
    </div>
  )
}
