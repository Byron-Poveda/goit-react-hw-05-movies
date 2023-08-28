import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import TMBD from './Pages/TMBD/TMBD'
export default function App() {
  return (
      <BrowserRouter>
        <TMBD/>
      </BrowserRouter>
  )
}

