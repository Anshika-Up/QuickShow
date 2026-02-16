<<<<<<< HEAD
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Loading = () => {

  const {nextUrl}= useParams();//here nextUrl is my-bookings page
  const navigate= useNavigate();

  useEffect(()=>{
    if(nextUrl){
      setTimeout(()=>{
        navigate('/'+ nextUrl)
      }, 8000)
    }

  },[])

=======
import React from 'react'

const Loading = () => {
>>>>>>> 15deb85855f6bd6d6b0556a28c71976c2e380cf5
  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <div className='animate-spin rounded-full h-14 w-14 border-2 border-t-primary'></div>
    </div>
  )
}

export default Loading