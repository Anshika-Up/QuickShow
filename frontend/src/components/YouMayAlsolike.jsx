import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle';
<<<<<<< HEAD
import MovieCard from './MovieCard';
import { useAppContext } from '../context/AppContext';

const YouMayAlsoLike = () => {

  const {shows}=useAppContext()

=======
import { dummyShowsData } from '../assets/assets';
import MovieCard from './MovieCard';

const YouMayAlsoLike = () => {

>>>>>>> 15deb85855f6bd6d6b0556a28c71976c2e380cf5
  const navigate=useNavigate();
  return (
    <div>
      <div className='relative flex items-center justify-between pt-20 pb-10'>
        <BlurCircle top='0' right='-80px'/>
        <p className='text-gray-300 font-medium text-lg'> You May Also Like </p>
       
      </div>
      <div className='flex flex-wrap max-sm:justify-center gap-8 mt-8'>
<<<<<<< HEAD
        {shows.slice(0,4).map((show)=>(
=======
        {dummyShowsData.slice(0,4).map((show)=>(
>>>>>>> 15deb85855f6bd6d6b0556a28c71976c2e380cf5
          <MovieCard key={show._id} movie={show} />
        ))}
      </div>

      <div className='flex justify-center mt-20'>
        <button className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer' onClick={()=>{navigate('/movies'); scrollTo(0,0)}}>
          Show more
        </button>
      </div>
    </div>
  )
}

export default YouMayAlsoLike