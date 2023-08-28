import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { baseURL, headers, baseImgURL, defaultImg } from 'components/Pages/Settings';
import axios from 'axios';
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState()
  const getInfoMovie = () => {
    axios({
      method: 'get',
      baseURL,
      url: `/movie/${movieId}/credits?language=en-US`,
      headers,
    })
    .then(res => setCast(res.data.cast))
  }
  useEffect(()=>{
    getInfoMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <ul className='grid grid-cols-4 gap-4 max-md:grid-cols-2 max-md:gap-2 max-[450px]:grid-cols-1 max-[450px]:gap-1'>
    {cast?.map((person) => (
      <li className='flex flex-col gap-[10px] border-solid border-gray-800 rounded-[15px] border-2 p-[15px]' key={person.id}>
        <img className='w-auto rounded-[15px]' src={person.profile_path ? baseImgURL + person.profile_path : defaultImg} alt={person.name} />
        <span className='font-bold text-[20px]'>{person.name}</span>
        <span className='font-bold text-[15px]'>Character: </span>
        <p>{person.character}</p>
      </li>
    ))}
    </ul>
  )
}


export default Cast
