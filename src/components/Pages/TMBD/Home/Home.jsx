import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { headers, baseURL } from 'components/Pages/Settings'
import Section from 'components/Section/Section'
import ListMovies from '../ListMovies/ListMovies'
const Home = () => {
    const [trending, setTrending] = useState({});
    const getMovies = () =>{
        axios({
            method: 'get',
            baseURL,
            url: `/trending/all/day?language=en-US`,
            headers,
          })
        .then(response => setTrending(response.data))
        .catch(err => console.log(err))
    }
    useEffect(()=>{
        getMovies()
    },[])
  return (
    <Section title="Home">
        <ListMovies movies={trending.results}/>
    </Section>
  )
}

export default Home
