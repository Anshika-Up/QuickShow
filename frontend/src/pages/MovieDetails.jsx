import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
<<<<<<< HEAD
=======
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
>>>>>>> 15deb85855f6bd6d6b0556a28c71976c2e380cf5
import BlurCircle from '../components/BlurCircle'
import { Heart, PlayCircleIcon, StarIcon } from 'lucide-react'
import timeFormat from '../lib/timeFormat'
import DateSelect from '../components/DateSelect'
import YouMayAlsoLike from '../components/YouMayAlsolike'
import Loading from '../components/Loading'
<<<<<<< HEAD
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
=======
>>>>>>> 15deb85855f6bd6d6b0556a28c71976c2e380cf5

const MovieDetails = () => {
  const { id } = useParams()
  const [show, setShow] = useState(null)

<<<<<<< HEAD
  const {axios,
    user, getToken, favoriteMovies, fetchFavoriteMovies ,image_base_url}=useAppContext()

  const getShow = async () => {
    try {
      const {data}= await axios.get(`/api/show/${id}`);
      if(data.success){
        setShow(data);
      }
    } catch (error) {
     console.log(error) 
    }
  }

  //fn to handle favorite movies update 
  const handleFavorite = async () =>{
    try {
      if(!user){
        return toast.error("Please login to add Movie to favorite")
      }

      const {data} = await axios.post('/api/user/update-favorite',{movieId:id}, {headers:{Authorization : `Bearer ${await getToken()}`}})

      if(data.success){
        await fetchFavoriteMovies();
        toast.success(data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

=======
  const getShow = async () => {
    const show = dummyShowsData.find(show => show._id === id)
    if(show){
      setShow({
        movie: show,
        dateTime: dummyDateTimeData
      })
    }
  }
>>>>>>> 15deb85855f6bd6d6b0556a28c71976c2e380cf5
  //to call getshow fn to get show data with given id when page reload
  useEffect(() => {
    getShow()
  }, [id])

  return show ? (
    <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
      <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>

<<<<<<< HEAD
        <img src={image_base_url + show.movie.poster_path} alt="" className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover' />
=======
        <img src={show.movie.poster_path} alt="" className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover' />
>>>>>>> 15deb85855f6bd6d6b0556a28c71976c2e380cf5

        <div className='relative flex flex-col gap-3'>
          <BlurCircle top="-100px" left="-100px" />
          <p className='text-primary'>ENGLISH</p>
          <h1 className='text-4xl font-semibold max-w-96 text-balance'>{show.movie.title} </h1>
          <div className='flex items-center gap-2 text-gray-300'>
            <StarIcon className='w-5 h-5 text-primary fill-primary' />
            {show.movie.vote_average.toFixed(1)} User Rating
          </div>
          <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'>{show.movie.overview} </p>
          <p>{timeFormat(show.movie.runtime)} • {show.movie.genres.map((genre) => genre.name).join(", ")} • {show.movie.release_date.split("-")[0]} </p>

          <div className='flex items-center flex-wrap gap-4 mt-4'>

            <button className='flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95'>
              <PlayCircleIcon className='w-5 h-5' />
              Watch Trailer
            </button>

            <a href="#DateSelect" className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer active:scale-95'>Buy Tickets </a>

<<<<<<< HEAD
            <button onClick={handleFavorite} className='bg-gray-700 p-2.5 rounded-full transition cursor-pointer active:scale-95'>
              <Heart className={`w-5 h-5 ${favoriteMovies.find(movie => movie._id === id)? "fill-primary text-primary" : ""} `} />
=======
            <button className='bg-gray-700 p-2.5 rounded-full transition cursor-pointer active:scale-95'>
              <Heart className={`w-5 h-5`} />
>>>>>>> 15deb85855f6bd6d6b0556a28c71976c2e380cf5
            </button>
          </div>
        </div>
      </div>

      <p className='text-lg font-medium mt-20'>Your Favorite Cast</p>

      <div className='overflow-x-auto no-scrollbar mt-8 pb-4'>
        <div className='flex items-center gap-4 w-max px-4'>
          {show.movie.casts.slice(0,12).map((cast,index)=>(
<<<<<<< HEAD
            <div key={index} className='flex flex-col items-center text-center'>
              <img src={image_base_url + cast.profile_path} alt="" className='rounded-full h-20 md:h-20 aspect-square object-cover' />
=======
            <div key={index} className='flexflex-col items-center text-center'>
              <img src={cast.profile_path} alt="" className='rounded-full h-20 md:h-20 aspect-square object-cover' />
>>>>>>> 15deb85855f6bd6d6b0556a28c71976c2e380cf5
            <p className='font-medium text-xs mt-3'>{cast.name} </p>
            </div>
          ))}
        </div>
      </div>

          <DateSelect dateTime={show.dateTime} id={id}/>
          <YouMayAlsoLike/>
    </div>
  ) : (
      <Loading/>
  )
}

export default MovieDetails