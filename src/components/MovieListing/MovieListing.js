import React from 'react'
import Slider from 'react-slick'
import { useSelector } from 'react-redux'
import { getMovies, getShows } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import "./MovieListing.scss"
import { settings } from '../../common/settings'
export default function MovieListing() {
  
  const movies = useSelector(getMovies)
  const shows = useSelector(getShows)
  let renderMovies,renderShows=''
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
  renderShows= shows.Response === 'True'?(
    shows.Search.map((show , index)=>{
      return <MovieCard key={index} data={show} />
    }
  )):
  (
    <div className='movies-error'>
      <h3>{shows.Error}</h3>
    </div>
  )
  return (
    <div className='movie-wapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'><Slider {...settings}>{renderMovies}</Slider></div>
      </div>
      <div className='movie-list'>
        <h2>Shows</h2>
        <div className='movie-container'><Slider {...settings}>{renderShows}</Slider></div>
      </div>
    </div>
  )
}
