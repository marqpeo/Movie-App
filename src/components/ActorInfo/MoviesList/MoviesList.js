/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'

import useMovieService from '../../../hooks/useMovieService'
import Spinner from '../../Spinner/Spinner'
import './movies-list.sass'

const MoviesList = ({actorId, actorName}) => {
    const {getMoviesOfActor,posterUrl, loading} = useMovieService()

    const [moviesList, setMoviesList] = useState([])

    useEffect(() => {
        getMoviesOfActor(actorId)
            .then(setMoviesList)
    }, [actorId])

    if(loading) return <Spinner/>

    return (
        <div className="movies">
            <div className="movies_title"><h2>Top {actorName}'s movies :</h2></div>
                <div className="movies_list">
                {
                    moviesList.map(item => {
                        return ( 
                            <Link to={`/movie/${item.id}`} className="movie">
                                <img src={`${posterUrl}${item.poster}`} alt={item.name}/>
                                <div className="movie_descr">
                                    <div className="movie_descr-name">{item.title}</div>
                                    {/* <div className="movie_descr-char">Character: {item.char}</div> */}
                                </div>
                            </Link>
                        )
                    })
                }
                </div>
        </div>
    )
}

export default MoviesList
