import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import user from '../../images/user.png';
import "./Header.scss"
import { useDispatch } from 'react-redux';
import { fetchMovies, fetchShows } from '../../features/movies/movieSlice';
export default function Header() {
  const [term,setterm] = useState("")
  const dispatch=useDispatch()

  const submitform = (e) => {
    e.preventDefault();
    if (term === '') return alert("please enter movie or show name");
      dispatch(fetchMovies(term));
      dispatch(fetchShows(term));
      setterm('');
    }
  
  return (
    <div className='header'>
       <div className='logo'><Link to="/">Movie App</Link></div>
        <div className='search'>
          <form onSubmit={submitform}>
            <input type="text" 
            placeholder='Enter movie or show name'
            value={term}
            onChange={(e)=>{
              setterm(e.target.value)
            }}
            />
             <button type='submit'><i 
            className='fa fa-search'></i></button>
           
          </form>
        </div>
      <div className='user-image'>
        <img src={ user} alt="user" />
      </div>
    </div>
  )
}
