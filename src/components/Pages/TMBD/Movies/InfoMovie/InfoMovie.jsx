import React, { useEffect, useState } from 'react'
import Section from 'components/Section/Section'
import { useParams } from 'react-router-dom'
import { headers, baseURL } from 'components/App'
import axios from 'axios'
function InfoMovie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({})
  const getInfoMovie = () => {
    axios({
      method: 'get',
      baseURL,
      url: `/movie/${movieId}?language=en-US`,
      headers,
    })
    .then(res => setMovie(res.data))
  }
  useEffect(()=>{
      getInfoMovie()
  },[])
  return (
    <Section title='Movie' classNameText="!text-red-500">
      <span>{movie.title}</span>
      {/* falta poner toda la info de la pelicula, el cast, las review, un chingo, pero voy por buen camino */}
    </Section>
  )
}

export default InfoMovie
