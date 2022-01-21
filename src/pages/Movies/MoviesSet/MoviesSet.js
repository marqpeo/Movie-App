/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import {Link, useLocation} from 'react-router-dom'
import { Box, Typography } from "@mui/material"

import useMovieService from "../../../hooks/useMovieService"
import SpinnerPage from "../../SpinnerPage/SpinnerPage"
import './movies-set.sass'
import MainButton from "../../../components/Buttons/MainButton"

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
        <Box sx={{textAlign:'center'}}>
            <Typography
                variant="h4"
                sx={{my:2}}
                // className='movies_set-title my-5'
                >
                Top {titleOfPage} Movies{ titleOfPage==='rated'? ' of All time' : ''}
            </Typography>
            <ul className='movies_set-list'>
                {list.map(item => <View posterUrl={posterUrl} movie={item} key={item.id}/>)}
            </ul>
            <MainButton
                sx={{my:2}}
                onClick={() => onRequest(false)}
                >Get more</MainButton>
        </Box>
    )
}
const View = ({movie, posterUrl}) => {
    
    return (
            <li className='movie'>
                <Link to={`/movies/${movie.id}`}>
                        <img src={`${posterUrl}${movie.poster}`} alt="poster"/>
                            <div className="movie_descr">
                                <div className='title'>{movie.title}</div>
                                <div className='rating'>{movie.rating}</div>
                            </div>                     
                </Link>
            </li>
    )
}

export default MoviesSet