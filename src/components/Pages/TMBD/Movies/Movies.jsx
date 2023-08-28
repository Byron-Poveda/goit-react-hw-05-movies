import React, { useState } from 'react'
import Section from 'components/Section/Section'
import ListMovies from '../ListMovies/ListMovies'
import { baseURL, headers } from 'components/Pages/Settings'
import Button from 'components/Buttton/Button'
import axios from 'axios'
import "./movies.css"
const Movies = () => {
  const [search, setSearch] = useState({});
  const [inputValue, setInputValue] = useState("");
  const handleInputValue = (e) => setInputValue(e.target.value)
    const getMovies = (e) =>{
      e.preventDefault()
        axios({
            method: 'get',
            baseURL,
            url: `/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`,
            headers,
          })
        .then(response => setSearch(response.data))
        .catch(err => console.log(err))
        setInputValue("")
      }
  return (
    <Section title="Movies">
      <form onSubmit={getMovies}>
      <div>
        <div className="flex gap-[8px] mb-[15px]">
          <input value={inputValue} onChange={handleInputValue} type="text" name="search" id="search" autoComplete="off" className="input-search"/>
          <Button type="submit" classButton='button-search'><i className="ri-search-line"></i></Button>
        </div>
      </div>
      </form>
      {search.page ? <ListMovies movies={search.results}/> : null}
    </Section>
  )
}

export default Movies
