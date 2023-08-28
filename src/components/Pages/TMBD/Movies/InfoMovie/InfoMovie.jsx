import React, { useEffect, useState } from 'react'
import Section from 'components/Section/Section'
import { useParams, Outlet } from 'react-router-dom'
import { headers, baseURL, baseImgURL, genres } from 'components/Pages/Settings'
import Button from 'components/Buttton/Button'
import { Link, NavLink } from 'react-router-dom'
import "../movies.css"
import axios from 'axios'
function InfoMovie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({})
  const [error, setError] = useState(false)
  const [groupGenres, setGroupGenres] = useState([])
  const getInfoMovie = () => {
    axios({
      method: 'get',
      baseURL,
      url: `/movie/${movieId}?language=en-US`,
      headers,
    })
    .then(res => {
      setMovie(res.data)
      setError(false)
    })
    .catch(err => setError(true))
  }
  const getGenres = () => {
    const newGenres = []
    movie?.genres?.map(genre => {
      return genres.map(dataGenre => {
        return genre.id === dataGenre.id ?  newGenres.push(dataGenre.name) : null
      })
    });
    setGroupGenres(newGenres)
  }
  useEffect(()=>{
    getInfoMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  useEffect(()=>{
    getGenres()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie])
    return (
      <Section classSection='flex flex-col gap-[20px]' classNameText="!text-red-500">
        <div className='flex items-center'>
          <Button classButton='!py-[8px] !px-[11px] !bg-gray-800 rounded-[8px]' classText='text-white' type='button'>
            <i className="ri-arrow-left-line"></i>
            <Link to="/">Go Back</Link>
            </Button>
        </div>
        <div className='flex gap-[20px] border-solid border-gray-800 rounded-[15px] border-2 p-[15px] max-md:flex-col max-md:items-center'>
          {!error ? <>
            <img className='rounded-[15px] max-md:w-[300px]' src={movie.poster_path ? baseImgURL +  movie.poster_path : baseImgURL + movie.backdrop_path} alt={movie?.title || movie?.name} />
          <div className='flex flex-col gap-[20px]'>
            <h1 className='font-bold text-[35px]'>{movie?.name || movie?.title}</h1>
            <p>User Score: {movie?.vote_average}</p>
            <h2 className='font-bold text-[25px]'>Overview</h2>
            <p>{movie?.overview}</p>
            <h2 className='font-bold text-[25px]'>Genres</h2>
            <p>{groupGenres.join(", ")}</p>
          </div>
          </> : <p>Not Found Information</p>}
        </div>
          {!error ? <div className='flex gap-[10px]'>
            <NavLink className="NavLink-desktop bg-gray-800" to={`/movies/${movieId}/cast`}>Cast</NavLink>
            <NavLink className="NavLink-desktop bg-gray-800" to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
          </div> : null}
          <Outlet/>
      </Section>
    )
}

export default InfoMovie
