/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import movieService from "../../../hooks/useMovieService";
import ActorList from "../../../components/ActorList/ActorList";
import MovieInfo from "../../../components/MovieInfo/MovieInfo";
import MoviesList from "../../../components/MoviesList/MoviesList";

import './SingleMoviePage.sass'
import SpinnerPage from "../../SpinnerPage/SpinnerPage";
import { Col, Container, Image, Row } from "react-bootstrap";


const SingleMoviePage = () => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState({})

    const {getMovieById,posterUrl,loading} = movieService()
    const navigate = useNavigate()

    useEffect(() => {
        getMovieById(movieId)
            .then(res => setMovie(res))
            .catch(err => console.log(err))
        
    }, [movieId])
    
    if (loading) return <SpinnerPage/>
    
        
    return (
        <Container fluid='xl' className="single_movie pt-4">

            <Row className="single_movie-details">
                <Col lg='3' className="single_movie_poster text-center">
                    <Image rounded src={`${posterUrl}${movie.poster}`} alt='poster'/>
                </Col>
                <Col>
                    <MovieInfo movie={movie} movieId={movieId}/>            
                </Col>
                
            </Row>
            <button className="btn btn-danger goback"
                    onClick={() => navigate(-1)}
                    >Go back</button>

            <ActorList movieId={movieId}/>
            <MoviesList type="movie" movieId={movieId}/>
        </Container>
    )
}

export default SingleMoviePage