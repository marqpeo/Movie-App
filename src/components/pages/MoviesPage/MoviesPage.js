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
        console.log('page is ',loadedPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pathname])


    
    const onRequest = (newRequest) => {
        const page = newRequest? (setLoadedPage(1),  1) : (setLoadedPage(prev => prev+1), loadedPage+1)
        console.log(page);
        getMovies(pathname, page)
            .then(res => setList(prev => [...prev, ...res]))
    }
    
    if (list.length<1) return <Spinner/>

    return (
        <div className='page moviesPage'>
            <h1 className='page_title my-5'>Top {titleOfPage} Movies{ titleOfPage==='rated'? ' of All time' : ''}</h1>
            <ul className='movie_list'>
                {list.map(item => <View movie={item} key={item.id}/>)}
            </ul>
            <button
                className="search_btn getmore"
                onClick={() => onRequest(false)}
                >Get more</button>
        </div>
    )
}
const View = ({movie}) => {
    
    return (
            <Link to={`/movie/${movie.id}`}>
                <li className='movie'>
                        <header>{movie.title}</header>
                        <img src={`${posterUrl}${movie.poster}`} alt="poster" />
                        <span className='rating'>{movie.rating}</span>
                </li>
            </Link>
    )
}

export default MoviesPage