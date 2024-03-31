import React from 'react'
import Navbar from '../../component/Navbar'
import { Navigate, Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
<>
{
  localStorage.getItem("token") ?<><Navbar/>
  <Outlet/></> : <Navigate to="/signin" />

}
</>  )
}

export default AuthLayout