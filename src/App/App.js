import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router";

import './app.sass'

import Appheader from "../components/Appheader/Appheader";
import MainPage from "../pages/MainPage/MainPage";

const ActorsPage = lazy(() => import('../pages/Actors/ActorsPage/ActorsPage'))
const Page404 = lazy(()=> import('../pages/404/Page404'))
const MoviesPage = lazy(() => import('../pages/Movies/MoviesPage/MoviesPage'))
const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'))
const TVPage = lazy(()=>import("../pages/TVShows/TVPage/TVPage"))

const App = () => {
  
  return (
    <div className='App'>
      <Appheader/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/movies/*' element={<MoviesPage/>} />
        <Route path='/movies' element={<Navigate to='/movies/top_rated'/>} />
        <Route path='/actors/*' element={<ActorsPage/>} />
        <Route path='/tv_shows/*' element={<TVPage/>} />
        <Route path='/search*' element={<SearchPage/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </div>
  )
}

export default App