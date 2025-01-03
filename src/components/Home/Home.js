import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import MovieApi from "../../common/api/movieApi"
import { APIKey} from '../../common/api/MovieApikey'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'
function Home() {
  const dispatch = useDispatch();
    useEffect(()=>{
        const movieText="Harry"
        
        const fetchmoives=async()=>{
            const res=await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
            .catch((err)=>{
                console.log("err : ",err)
            })
            dispatch(addMovies(res.data))
        }
        fetchmoives()
    },[dispatch])
  return (
    <div>
      <div className='banner-img'>
      </div>
      <MovieListing/>
    </div>
  )
}

export default Home

