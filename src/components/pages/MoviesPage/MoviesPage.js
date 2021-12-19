/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import {Link, useLocation} from 'react-router-dom'

import useMovieService from "../../../hooks/useMovieService"
import SpinnerPage from "../../Spinner/SpinnerPage"
import './MoviesPage.sass'

const MoviesPage = () => {

    const {pathname} = useLocation()


    const titleOfPage = pathname==='/top_rated' ? pathname.slice(5) : pathname.slice(1)
    const {getMovies,posterUrl, loading} = useMovieService()
    const [list, setList] = useState([])
    const [loadedPage, setLoadedPage] = useState(1)

    useEffect(() => {
        setList([])
        onRequest(true)
    },[pathname])

    const onRequest = (newRequest) => {
        const page = newRequest? (setLoadedPage(1),  1) : (setLoadedPage(prev => prev+1), loadedPage+1)
        getMovies(pathname, page)
            .then(res => setList(prev => [...prev, ...res]))
    }

    if (list.length<1 || loading) return <SpinnerPage/>

    return (
        <div className='page'>
            <div className="movies_page">
                <h1 className='movies_page-title my-5'>Top {titleOfPage} Movies{ titleOfPage==='rated'? ' of All time' : ''}</h1>
                <ul className='movies_page-list'>
                    {list.map(item => <View posterUrl={posterUrl} movie={item} key={item.id}/>)}
                </ul>
                <button className="search_btn getmore"
                        onClick={() => onRequest(false)}
                        >Get more</button>
            </div>
        </div>
    )
}
const View = ({movie, posterUrl}) => {
    
    return (
            <li className='movie'>
                <Link to={`/movie/${movie.id}`}>
                        <img src={`${posterUrl}${movie.poster}`} alt="poster"/>
                            <div className="movie_descr">
                                <div className='title'>{movie.title}</div>
                                <div className='rating'>{movie.rating}</div>
                            </div>                     
                </Link>
            </li>
    )
}

export default MoviesPage