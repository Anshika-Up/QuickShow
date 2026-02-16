<<<<<<< HEAD
import React, { useEffect } from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar'
import AdminSidebar from '../../components/admin/AdminSidebar'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import Loading from '../../components/Loading'

const Layout = () => {

  const {isAdmin, fetchIsAdmin}=useAppContext()

  useEffect(()=>{
    fetchIsAdmin()
  },[])

  return isAdmin ?(
=======
import React from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar'
import AdminSidebar from '../../components/admin/AdminSidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
>>>>>>> 15deb85855f6bd6d6b0556a28c71976c2e380cf5
    <>
    <AdminNavbar/>
    <div className='flex'>
      <AdminSidebar/>
      <div className='flex-1 px-4 py-10 md:px-10 h-[calc(100vh-64px)] overflow-y-auto'>
        <Outlet/>
      </div>
    </div>
    </>
<<<<<<< HEAD
  ): <Loading/>
=======
  )
>>>>>>> 15deb85855f6bd6d6b0556a28c71976c2e380cf5
}

export default Layout