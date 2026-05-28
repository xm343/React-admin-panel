import { Outlet } from "react-router";


const AdminLayout = () => {
  return (<div className="admin-layout">Admin Layout
    <div className="children"><Outlet  /></div>
  </div>)
}
export default AdminLayout 