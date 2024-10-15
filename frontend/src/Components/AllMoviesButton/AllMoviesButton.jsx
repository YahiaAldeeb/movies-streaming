import React from 'react'
import { Link } from 'react-router-dom';
import './AllMoviesButton.css'
const AllMoviesButton = () => {
  return (
    <>
           <Link to="/AllMovies">
              <button className="all-movies-btn">All Movies</button>
            </Link>
            </>
  )
}

export default AllMoviesButton