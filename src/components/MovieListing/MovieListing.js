import React from 'react'
import { useSelector } from 'react-redux'
import { getmovies } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import "./MovieListing.scss"
export default function MovieListing() {
  const movies = useSelector(getmovies)
  let renderMovies=''
  renderMovies= movies.Response === 'True'?(
    movies.Search.map((movie , index)=>{
      return <MovieCard key={index} data={movie} />
    }
  )):
  (
    <div className='movies-error'>
      <h3>{movies.Error}</h3>
    </div>
  )
  return (
    <div className='movie-wapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>{renderMovies}</div>
      </div>
    </div>
  )
}
