import { Button } from './ui/button'
import { NavLink } from "react-router"

function SidebarButton({ title, path }: { title: string, path: string }) {
  return (
    <Button asChild>
      <NavLink to={path} className={({ isActive, isPending }) => (
        isActive ? "text-slate-100" :
          isPending ? "text-slate-400" :
            ""
      )}>{title}</NavLink>
    </Button>
  )
}

export default function Sidebar() {
  return (
    <div className="space-y-1">
      <SidebarButton title="Overview" path="/" />
      <SidebarButton title="Skills" path="/skills" />
      <SidebarButton title="Job History" path="/jobs" />
    </div>
  )
}
