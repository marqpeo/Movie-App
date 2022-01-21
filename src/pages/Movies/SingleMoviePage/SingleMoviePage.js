/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

import movieService from "../../../hooks/useMovieService";
import ActorList from "../../../components/ActorList/ActorList";
import MovieInfo from "../../../components/MovieInfo/MovieInfo";
import MoviesList from "../../../components/MoviesList/MoviesList";

import './SingleMoviePage.sass'
import SpinnerPage from "../../SpinnerPage/SpinnerPage";
import MainButton from "../../../components/Buttons/MainButton";


const SingleMoviePage = () => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState({})

    const {getMovieById,posterUrl,loading} = movieService()
    const navigate = useNavigate()

    useEffect(() => {
        getMovieById(movieId)
            .then(res => setMovie(res))
            .catch(err => console.log(err))
        window.scrollTo(0, 0)
    }, [movieId])
    
    if (loading) return <SpinnerPage/>
    
        
    return (
        <div className="single_movie">

            <div className="single_movie-details">
                <div className="single_movie_poster">
                    <img src={`${posterUrl}${movie.poster}`} alt='poster'/>
                </div>
                <MovieInfo movie={movie} movieId={movieId}/>  
                <MainButton
                    sx={{   position :'absolute',
                            right: '10%',
                            top: '10%'}}
                    onClick={() => navigate(-1)}
                    >Go Back</MainButton>
                {/* <button className="main_btn goback"
                        onClick={() => navigate(-1)}
                        >Go back</button> */}
                
            </div>

            <ActorList movieId={movieId}/>
            <MoviesList type="movie" movieId={movieId}/>
        </div>
    )
}

export default SingleMoviePage