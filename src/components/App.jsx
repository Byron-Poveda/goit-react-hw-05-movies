import React from 'react'
import TMBD from './TMBD/TMBD'
import { BrowserRouter } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <TMBD/>
    </BrowserRouter>
  )
}

