import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import TMBD from './Pages/TMBD/TMBD'
export const headers= {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjE3YzliNjRmNzI3NGRlOTZkMmMyYTJjNzdjNTkzZSIsInN1YiI6IjY0OTI3NTZhNzA2ZTU2MDEzYTY0ZjVkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XQ5XgFG--illCIpvwHSgN0k0o92xmS9SjDoFOE3DrSM'            
}
export const baseURL = "https://api.themoviedb.org/3"
export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <TMBD/>
      </BrowserRouter>
    </React.StrictMode>
  )
}

