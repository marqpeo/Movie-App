/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { Container, Image } from "react-bootstrap"
import {Link, useLocation} from 'react-router-dom'

import useMovieService from "../../../hooks/useMovieService"
import SpinnerPage from "../../SpinnerPage/SpinnerPage"
import './movies-set.sass'

const MoviesSet = () => {

    const pathname = useLocation().pathname.slice(7)

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
        <Container fluid className='text-center'>
            <h1 className='text-capitalize my-4'>Top {titleOfPage} Movies{ titleOfPage==='rated'? ' of All time' : ''}</h1>
            <ul className='movies_set-list'>
                {list.map(item => <View posterUrl={posterUrl} movie={item} key={item.id}/>)}
            </ul>
            <button className="btn btn-danger my-3"
                    onClick={() => onRequest(false)}
                    >Get more</button>
        </Container>
    )
}
const View = ({movie, posterUrl}) => {
    
    return (
            <li className='movie'>
                <Link to={`/movies/${movie.id}`}>
                        <Image src={`${posterUrl}${movie.poster}`} alt="poster"/>
                        <div className="movie_descr">
                            <div className='title'>{movie.title}</div>
                            <div className='rating'>{movie.rating}</div>
                        </div>                     
                </Link>
            </li>
    )
}

export default MoviesSet