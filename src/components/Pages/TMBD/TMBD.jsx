import React, { lazy, Suspense } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import "./TMBD.css"
import Section from 'components/Section/Section'
import Loading from '../Loading/Loading'
const Home = lazy(()=> import ('./Home/Home')) 
const Movies = lazy(()=> import ('./Movies/Movies')) 
const InfoMovie = lazy(()=> import ('./Movies/InfoMovie/InfoMovie'))
const Cast = lazy(()=> import ('./Movies/Cast/Cast'))
const Reviews = lazy(()=> import ('./Movies/Reviews/Reviews'))
const Error404 = lazy(()=> import ('../Error404/Error404')) 
const TMBD = () => {
  return (
    <Section classSection="min-h-full">
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-md:hidden">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-4">
                                <div className='w-[50px] h-[50px]'>
                                    <svg className="fill-blue-300" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>The Movie Database</title><path d="M6.62 12a2.291 2.291 0 0 1 2.292-2.295h-.013A2.291 2.291 0 0 1 11.189 12a2.291 2.291 0 0 1-2.29 2.291h.013A2.291 2.291 0 0 1 6.62 12zm10.72-4.062h4.266a2.291 2.291 0 0 0 2.29-2.291 2.291 2.291 0 0 0-2.29-2.296H17.34a2.291 2.291 0 0 0-2.291 2.296 2.291 2.291 0 0 0 2.29 2.29zM2.688 20.645h8.285a2.291 2.291 0 0 0 2.291-2.292 2.291 2.291 0 0 0-2.29-2.295H2.687a2.291 2.291 0 0 0-2.291 2.295 2.291 2.291 0 0 0 2.29 2.292zm10.881-6.354h.81l1.894-4.586H15.19l-1.154 3.008h-.013l-1.135-3.008h-1.154zm4.208 0h1.011V9.705h-1.011zm2.878 0h3.235v-.93h-2.223v-.933h1.99v-.934h-1.99v-.855h2.107v-.934h-3.112zM1.31 7.941h1.01V4.247h1.31v-.895H0v.895h1.31zm3.747 0h1.011V5.959h1.958v1.984h1.011v-4.59h-1.01v1.711H6.061V3.351H5.057zm5.348 0h3.242v-.933H11.41v-.934h1.99v-.933h-1.99v-.856h2.107v-.934h-3.112zM.162 14.296h1.005v-3.52h.013l1.167 3.52h.765l1.206-3.52h.013v3.52h1.011v-4.59H3.82L2.755 12.7h-.013L1.686 9.705H.156zm14.534 6.353h1.641a3.188 3.188 0 0 0 .98-.149 2.531 2.531 0 0 0 .824-.437 2.123 2.123 0 0 0 .567-.713 2.193 2.193 0 0 0 .223-.983 2.399 2.399 0 0 0-.218-1.07 1.958 1.958 0 0 0-.586-.716 2.405 2.405 0 0 0-.873-.392 4.349 4.349 0 0 0-1.046-.13h-1.519zm1.013-3.656h.596a2.26 2.26 0 0 1 .606.08 1.514 1.514 0 0 1 .503.244 1.167 1.167 0 0 1 .34.412 1.28 1.28 0 0 1 .13.587 1.546 1.546 0 0 1-.13.658 1.127 1.127 0 0 1-.347.433 1.41 1.41 0 0 1-.518.238 2.797 2.797 0 0 1-.649.07h-.538zm4.686 3.656h1.88a2.997 2.997 0 0 0 .613-.064 1.735 1.735 0 0 0 .554-.214 1.221 1.221 0 0 0 .402-.39 1.105 1.105 0 0 0 .155-.606 1.188 1.188 0 0 0-.071-.415 1.01 1.01 0 0 0-.204-.34 1.087 1.087 0 0 0-.317-.24 1.297 1.297 0 0 0-.413-.13v-.012a1.203 1.203 0 0 0 .575-.366.962.962 0 0 0 .216-.648 1.081 1.081 0 0 0-.149-.603 1.022 1.022 0 0 0-.389-.354 1.673 1.673 0 0 0-.54-.169 4.463 4.463 0 0 0-.6-.041h-1.712zm1.011-3.734h.687a1.4 1.4 0 0 1 .24.022.748.748 0 0 1 .22.075.432.432 0 0 1 .16.147.418.418 0 0 1 .061.236.47.47 0 0 1-.055.233.433.433 0 0 1-.146.156.62.62 0 0 1-.204.084 1.058 1.058 0 0 1-.23.026h-.745zm0 1.835h.765a1.96 1.96 0 0 1 .266.02 1.015 1.015 0 0 1 .26.07.519.519 0 0 1 .204.152.406.406 0 0 1 .08.26.481.481 0 0 1-.06.253.519.519 0 0 1-.16.168.62.62 0 0 1-.217.09 1.155 1.155 0 0 1-.237.027H21.4z"/></svg>
                                </div>
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
                <Suspense fallback={<Loading/>}>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/goit-react-hw-05-movies' element={<Home/>}/>
                        <Route path='/movies' element={<Movies/>}/>
                        <Route path='/movies/:movieId' element={<InfoMovie/>}>
                            <Route path='cast' element={<Cast/>}/>
                            <Route path='reviews' element={<Reviews/>}/>
                        </Route>
                        <Route path="/*" element={<Error404/>}/>
                    </Routes>
                </Suspense>
            </div>
        </header>
    </Section>
  )
}

export default TMBD
