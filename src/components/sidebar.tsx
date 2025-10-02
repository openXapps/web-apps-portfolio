import { Button } from './ui/button'
import { NavLink } from "react-router"

function SidebarButton({ title, path }: { title: string, path: string }) {
  return (
    <Button asChild>
      <NavLink to={path} className={({ isActive }) =>
        [
          isActive ? "bg-orange-800" : "",
          "text-red-400"
        ].join(" ")
      }>{title}</NavLink>
    </Button>
  )
}

export default function Sidebar() {


  return (
    <nav className="flex flex-col gap-2">
      <SidebarButton title="Overview" path="/" />
      <SidebarButton title="Skills" path="/skills" />
      <SidebarButton title="Job History" path="/jobhistory" />
    </nav>
  )
}
