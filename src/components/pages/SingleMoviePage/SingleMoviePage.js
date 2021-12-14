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
    const genres = movie.genres ? movie.genres.reduce((a,b) => a+', '+b) : false
    const movietime = runtime? `${Math.floor(runtime/60)} h ${runtime%60} m` : 'unknown'

    if (loading) return <SpinnerPage/>

    return (
        <div className="page">
            <div className="single_movie">

                <div className="container">
                    <div className="row">

                        <div className="col-3">
                        <img className='single_movie-poster' src={`${posterUrl}${poster}`} alt='poster'/>
                        </div>

                        <div className="col single_movie-info">
                            <h1 className="single_movie-info-title">{title}</h1>
                            <p><i class="bi bi-star-fill fs-1"> </i> <span className="single_movie-info-rating">{rating}</span> / {voteCount}</p>
                            <p>{status==='Released'?'':'Status:'}<span className='single_movie-info-data'> {status}</span></p>
                            <p>Release date:<span className='single_movie-info-data'> {date}</span></p>
                            <p>Genres:<span className='single_movie-info-data'> {genres} </span></p>
                            <p>Runtime:<span className='single_movie-info-data'> {movietime} </span></p>
                            <p><span className="single_movie-info-descr">Description: </span><br/> {description}</p>
                            <button className="search_btn goback"
                                    onClick={() => navigate(-1)}
                                    >Go back</button>

                        </div>

                    </div>
                </div>
                <ActorList movieId={movieId}/>
            </div>
        </div>
    )
}

export default SingleMoviePage