import { Route, Routes } from "react-router-dom"
import MoviesSet from "../MoviesSet/MoviesSet"
import Layout from "../MoviesLayout/Layout"
import SingleMoviePage from "../SingleMoviePage/SingleMoviePage"


const MoviesPage = () => {
    return (
        <div className="movies_page">
            <Routes>
                <Route path='' element={<Layout/>}>
                    <Route path='top_rated' element={<MoviesSet/>}/>
                    <Route path='popular' element={<MoviesSet/>} />
                    <Route path='upcoming' element={<MoviesSet/>} />
                    <Route path=':movieId' element={<SingleMoviePage/>} />

                </Route>
            </Routes>
        </div>
    )
}

export default MoviesPage