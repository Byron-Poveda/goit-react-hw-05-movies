import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { baseImgURL, defaultImgMovie } from 'components/Pages/Settings';
function ListMovies({ movies }) {
  if (movies?.length === 0) {
    return <p>No hay películas disponibles.</p>;
  }

  return (
    <ul className='grid grid-cols-4 gap-4 max-[950px]:grid-cols-3 max-[950px]:gap-3 max-md:grid-cols-2 max-md:gap-2 max-[450px]:grid-cols-1 max-[450px]:gap-1'>
      {movies?.map((movie) => (
        <li className='flex relative border-solid border-gray-800 rounded-[15px] border-2 p-[1px] overflow-hidden' key={movie.id}>
          <NavLink to={`/movies/${movie.id}`}>
            <img className='rounded-[15px] max-md:w-[350px] max-[450px]:w-[400px]' src={movie?.backdrop_path ? baseImgURL + movie?.backdrop_path : defaultImgMovie} alt={movie?.title || movie?.name} />
            <div className='w-full py-[5px] absolute bottom-0 text-center' style={{backgroundColor : '#000000ab'}}><p className='text-white font-bold text-[12px]'>{movie?.title || movie?.name}</p></div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

ListMovies.propTypes = {
  movies: PropTypes.array,
};

export default ListMovies;
