import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AdminNavbar from '../../component/AdminNavbar'

const AdminLayout = () => {
  return (
<>
{
  localStorage.getItem("token") && localStorage.getItem("admin") ?<><AdminNavbar/>
  <Outlet/></> : <Navigate to="/signin" />

}
</>  )
}

export default AdminLayout