import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import MyBookings from './pages/MyBookings'
import SeatLayouts from './pages/SeatLayouts'
import Favorite from './pages/Favorite'
import Footer from './components/Footer'
import {Toaster} from 'react-hot-toast'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddShows from './pages/admin/AddShows'
import ListShows from './pages/admin/ListShows'
import ListBookings from './pages/admin/ListBookings'
<<<<<<< HEAD
import { useAppContext } from './context/AppContext'
import { SignIn } from '@clerk/clerk-react'
import Loading from './components/Loading'
=======
>>>>>>> 15deb85855f6bd6d6b0556a28c71976c2e380cf5

const App = () => {

  const isAdminRoute=useLocation().pathname.startsWith('/admin');

<<<<<<< HEAD
  const {user}=useAppContext()

=======
>>>>>>> 15deb85855f6bd6d6b0556a28c71976c2e380cf5
  return (
    <>
    <Toaster/>
    {/* navbar and footer component is shown to pages of user only, not for admin */}
    { !isAdminRoute && <Navbar/>} 
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/movies" element={<Movies/>} />
    <Route path="/movies/:id" element={<MovieDetails/>} />
    <Route path="/movies/:id/:date" element={<SeatLayouts/>} />  
    <Route path="/my-bookings" element={<MyBookings/>} />
<<<<<<< HEAD
    <Route path="/loading/:nextUrl" element={<Loading/>} />
    <Route path="/favorite" element={<Favorite/>} />

    {/* admin pages routes */}
    <Route path='/admin/*' element={user ? <Layout/> : (
      <div className='min-h-screen flex justify-center items-center'>
        <SignIn fallbackRedirectUrl={'/admin'}/>
      </div>
    )} >
=======
    <Route path="/favorite" element={<Favorite/>} />
    {/* admin pages routes */}
    <Route path='/admin/*' element={<Layout/>} >
>>>>>>> 15deb85855f6bd6d6b0556a28c71976c2e380cf5
    <Route index element={<Dashboard/>} />
    <Route path='add-shows' element={<AddShows/>} />
    <Route path='list-shows' element={<ListShows/>} />
    <Route path='list-bookings' element={<ListBookings/>} />
    </Route>
   </Routes>
   {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App