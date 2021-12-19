/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import useMovieService from '../../../hooks/useMovieService';
import SpinnerPage from '../../Spinner/SpinnerPage';
import './movie-info.sass'


const MovieInfo = ({movie, movieId}) => {
    const {title,date,rating,description,voteCount,status,runtime} = movie
    const [crew, setCrew] = useState({})

    const {getCreditsInMovie, loading} = useMovieService()
    
    useEffect(() => {
        getCreditsInMovie(movieId)
        .then(({crew}) => setCrew(crew))
        // .then(({crew}) => console.log(crew))
        .catch(err => console.log(err))
        
    }, [movieId])
    
    if(loading) return <SpinnerPage/>

    const genres = movie.genres ? (Array.isArray(movie.genres)? movie.genres.reduce((a,b) => a+', '+b) : movie.genres) : false
    const movietime = runtime? `${Math.floor(runtime/60)} h ${runtime%60} m` : 'unknown'

    const {producer,director,director_of_photography,original_music_composer} = crew
    return (
        <div className="movie_info">
            <h1 className="movie_title">{title}{date?` (${date.slice(0,4)})`:null}</h1>
            <p><i className="bi bi-star-fill fs-1"></i> <span className="rating">   {rating}</span> / {voteCount}</p>
            <p>{status==='Released'?'':(<span className="info_type">Status:</span>)}<span className='data'> {status}</span></p>
            <p><span className="info_type">Genres:</span><span className='data'>
                {genres} 
                </span></p>
            <p><span className="info_type">Runtime:</span><span className='data'>{runtime} min.  /  {movietime} </span></p>
            <p><span className="info_type">Release date:</span><span className='data'> {date}</span></p>
            <p><span className="info_type">Director:</span><span className='data'> {director} </span></p>
            <p><span className="info_type">Producers:</span><span className='data'>{producer}</span></p>
            <p><span className="info_type">Director of photography:</span><span className='data'>{director_of_photography}</span></p>
            <p><span className="info_type">Composers:</span><span className='data'>{original_music_composer}</span></p>
            
            <div>
                <span className="info_type descr">Description: </span><br/>
                {description}
            </div>
        </div>
    )
}

export default MovieInfo