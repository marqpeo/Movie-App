/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

import useMovieService from '../../hooks/useMovieService'
import Spinner from '../Spinner/Spinner'
import './movies-list.sass'

const MoviesList = ({type, movieId, actorId, actorName}) => {

    const {getMoviesOfActor,getSimilarMovies,posterUrl, loading} = useMovieService()

    const [moviesList, setMoviesList] = useState([])

    const getData = () =>  {
        switch (type) {
            case "actor":
                return getMoviesOfActor(actorId)
            case "movie":
                return getSimilarMovies(movieId)
            default: return false
            }
    }
    useEffect(() => {
        getData().then(setMoviesList)
    }, [actorId,movieId])

    if(loading) return <Spinner/>
    return (
        <div className="movies">
            <div className="movies_title"><h2>Top {actorName||'similar'} movies :</h2></div>
                <div className="movies_list">
                {
                    moviesList.map(item => {
                        return ( 
                            <Link key={item.id} to={`/movies/${item.id}`} className="movie">
                                <img src={`${posterUrl}${item.poster}`} alt={item.name}/>
                                <div className="movie_descr">
                                    <div className="movie_descr-name">{item.title}</div>
                                    <div className="movie_descr-rating">{item.rating}</div>
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