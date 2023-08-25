import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import "./TMBD.css"
import Section from 'components/Section/Section'
import Home from './Home/Home'
import Movies from './Movies/Movies'
import InfoMovie from './Movies/InfoMovie/InfoMovie'
import Error404 from '../Error404/Error404'
const TMBD = () => {
  return (
    <Section className="min-h-full">
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-md:hidden">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <NavLink className="NavLink-desktop" to="/">Home</NavLink>
                                <NavLink className="NavLink-desktop" to="/movies">Movies</NavLink>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
                
            <div className="md:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    <NavLink className="NavLink-mobile" to="/">Home</NavLink>
                    <NavLink className="NavLink-mobile" to="/movies">Movies</NavLink>
                </div>
            </div>
        </nav>
        <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/movies' element={<Movies/>}/>
                    <Route path='/movies/:movieId' element={<InfoMovie/>}/>
                    <Route path="/*" element={<Error404/>}/>
                </Routes>
            </div>
        </header>
    </Section>
  )
}

export default TMBD
