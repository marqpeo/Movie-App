import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import movieService from "../../../hooks/useMovieService";
import { posterUrl } from "../../App/App";

import './SingleMoviePage.sass'


const SingleMoviePage = () => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState({})
    const {getMovieById} = movieService()
    const navigate = useNavigate()

    useEffect(() => {
        getMovieById(movieId)
            .then(res => setMovie(res))
    }, [movieId])

    const {title,date,rating,poster,description,voteCount, status} = movie

    const genres = movie.genres ? movie.genres.reduce((a,b) => a+', '+b) : false
    
    return (
        <div className="page">
            <div className="single_movie">
                <div className="container">
                    <div className="row">

                        <div className="col-4">
                        <img className='single_movie-poster' src={`${posterUrl}${poster}`} alt='poster'/>
                        </div>

                        <div className="col single_movie-info">
                            <h1>{title}</h1>
                            <p><i class="bi bi-star-fill fs-1"> </i> <span className="single_movie-info-rating">{rating}</span> / {voteCount}</p>
                            <p>{status==='Released'?'':'Status:'}<span className='single_movie-info-data'> {status}</span></p>
                            <p>Release date:<span className='single_movie-info-data'> {date}</span></p>
                            <p>Genres:<span className='single_movie-info-data'> {genres} </span></p>
                            <p><span className="single_movie-info-descr">Description: </span><br/> {description}</p>

                            <button
                                className="search_btn goback"
                                onClick={() => navigate(-1)}
                                >Go back</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleMoviePage
