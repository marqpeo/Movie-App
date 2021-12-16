/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import movieService from "../../../hooks/useMovieService";
import ActorList from "../../SingleMovie/ActorList/ActorList";
import SpinnerPage from "../../Spinner/SpinnerPage";

import './SingleMoviePage.sass'


const SingleMoviePage = () => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState({})


    const {getMovieById,posterUrl, loading} = movieService()
    const navigate = useNavigate()

    useEffect(() => {
        getMovieById(movieId)
            .then(res => setMovie(res))
            .catch(err => console.log(err))

    }, [movieId])

    const {title,date,rating,poster,description,voteCount,status,runtime} = movie
    const genres = movie.genres ? (Array.isArray(movie.genres)? movie.genres.reduce((a,b) => a+', '+b) : movie.genres) : false
    const movietime = runtime? `${Math.floor(runtime/60)} h ${runtime%60} m` : 'unknown'

    if (loading) return <SpinnerPage/>
    return (
        <div className="single_movie">

            <div className="single_movie-details">
                <div className="movie_poster">
                    <img src={`${posterUrl}${poster}`} alt='poster'/>
                </div>

                <div className="movie_info">
                    <h1 className="title">{title} {date?`(${date.slice(0,4)})`:null}</h1>
                    <p><i class="bi bi-star-fill fs-1"></i> <span className="rating">   {rating}</span> / {voteCount}</p>
                    <p>{status==='Released'?'':(<span className="info_type">Status:</span>)}<span className='data'> {status}</span></p>
                    <p><span className="info_type">Genres:</span><span className='data'>
                        {genres} 
                        </span></p>
                    <p><span className="info_type">Runtime:</span><span className='data'>{runtime} min.  /  {movietime} </span></p>
                    <p><span className="info_type">Release date:</span><span className='data'> {date}</span></p>
                    <div>
                        <span className="info_type descr">Description: </span><br/>
                        {description}
                    </div>
                    <button className="search_btn goback"
                            onClick={() => navigate(-1)}
                            >Go back</button>
                </div>
            </div>

            <ActorList movieId={movieId}/>
            
        </div>
    )
}

export default SingleMoviePage