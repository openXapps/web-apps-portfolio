import { Outlet } from "react-router"

export default function Root() {
  return (
    <div className="container mx-auto">
      <Outlet />
    </div>
  )
}
