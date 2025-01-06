import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'

import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, fetchShows, getIsLoading } from '../../features/movies/movieSlice'
function Home() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
    useEffect(()=>{
      const movietext="harry"
      const showtext="friends"
     dispatch(fetchMovies(movietext));
     dispatch(fetchShows(showtext));
    },[dispatch])
  return (
   
    <div>
       {isLoading && <div className="loading">Loading...</div>}
      <div className='banner-img'>
      </div>
      <MovieListing/>
    </div>
  )
}

export default Home

