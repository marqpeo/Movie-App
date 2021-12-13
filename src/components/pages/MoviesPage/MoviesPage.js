import { useEffect, useState } from "react"
import {Link, useLocation} from 'react-router-dom'

import useMovieService from "../../../hooks/useMovieService"
import { posterUrl } from "../../App/App"
import Spinner from "../../Spinner/Spinner"
import './MoviesPage.sass'

const MoviesPage = () => {

    const {pathname} = useLocation()


    const titleOfPage = pathname==='/top_rated' ? pathname.slice(5) : pathname.slice(1)
    const {getMovies, loading} = useMovieService()
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
    
    if (list.length<1 && loading) return <Spinner/>

    return (
        <div className='page'>
            <div className="movies_page">
                <h1 className='movies_page-title my-5'>Top {titleOfPage} Movies{ titleOfPage==='rated'? ' of All time' : ''}</h1>
                <ul className='movies_page-list'>
                    {list.map(item => <View movie={item} key={item.id}/>)}
                </ul>
                <button className="search_btn getmore"
                        onClick={() => onRequest(false)}
                        >Get more</button>
            </div>
        </div>
    )
}
const View = ({movie}) => {
    
    return (
                <Link className='movie' to={`/movie/${movie.id}`}>
            <li>
                        <img src={`${posterUrl}${movie.poster}`} alt="poster" />
                        <div className="movie_descr">
                            {movie.title}
                            <span className='movie_rating'>{movie.rating}</span>
                        </div>                        
            </li>
                </Link>
    )
}

export default MoviesPage