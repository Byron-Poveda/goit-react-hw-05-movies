import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { baseURL, headers} from 'components/Pages/Settings';
import axios from 'axios';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState()
  const getInfoMovie = () => {
    axios({
      method: 'get',
      baseURL,
      url: `/movie/${movieId}/reviews?language=en-US`,
      headers,
    })
    .then(res => setReviews(res.data.results))
  }
  useEffect(()=>{
    getInfoMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  if (reviews?.length === 0) {
    return <p>No hay Reviews disponibles.</p>;
  }
  return (
    <ul className='flex flex-col gap-[10px]'>
    {reviews?.map((review) => (
      <li className='flex flex-col gap-[10px] border-solid border-gray-800 rounded-[15px] border-2 p-[15px]' 
      style={{background: 'linear-gradient(90deg, rgba(202,232,241,1) 0%, rgba(224,239,255,1) 35%, rgba(212,243,255,1) 100%)'}} 
      key={review.id}>
        <h2 className='font-bold text-[20px]'>{review.author}</h2>
        <p>{review.content}</p>
      </li>
    ))}
    </ul>
  )
}


export default Reviews
