// import { lazy } from "react";
// const SingleFilm = lazy(() => import('../pages/SingleFilmPage/SingleFilmPage'))

import { Route, Routes } from "react-router";

import Appheader from "../Appheader/Appheader";
import Page404 from "../pages/404/Page404";
import MainPage from "../pages/MainPage/MainPage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import SingleActorPage from "../pages/SingleActorPage/SingleActorPage";
import SingleMoviePage from "../pages/SingleMoviePage/SingleMoviePage";
import './app.sass'


const App = () => {
  
  return (
    <div className='App'>
      <Appheader/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/top_rated' element={<MoviesPage/>} />
        <Route path='/popular' element={<MoviesPage/>} />
        <Route path='/upcoming' element={<MoviesPage/>} />
        <Route path='/movie/:movieId' element={<SingleMoviePage/> }/>
        <Route path='/actor/:actorId' element={<SingleActorPage/>}/>
        <Route path='/search/:movie' element={<SearchPage/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </div>
  );
}

export default App