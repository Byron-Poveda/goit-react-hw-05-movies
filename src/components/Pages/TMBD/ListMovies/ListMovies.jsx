import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
function ListMovies({movies}) {
  return (
    <ul>
        {movies?.map((movie,index) => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`}>{index}-{movie?.title || movie?.name}</NavLink>
          {/* <img src={imageBaseURL + movie.poster_path} alt={movie?.title || movie?.name} /> */}
        </li>
      ))}
    </ul>
  )
}

ListMovies.propTypes = {
    movies: PropTypes.array
}

export default ListMovies
