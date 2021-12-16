import axios from "axios";
import { useState } from "react";

const request = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    responseType: 'json'
})

const useMovieService = () => {
    const _apiKey = '014790e247641f87a6ec229cf9cd44e4'
    const posterUrl = 'https://image.tmdb.org/t/p/w500'
    const [loading, setLoading] = useState(true)


    const getMovies = async (path, loadedPage) => {
        const res = await request.get(`/movie${path}?api_key=${_apiKey}&page=${loadedPage}`)
        setLoading(false)
        return res.data.results.map(_transformMovie)
    }

    const getMovieById = async (movieId) => {
        const res = await request.get(`/movie/${movieId}?api_key=${_apiKey}`)
        setLoading(false)
        return _transformMovie(res.data)
    }
    
    const getActorsInMovie = async (movieId) => {
        const res = await request.get(`/movie/${movieId}/credits?api_key=${_apiKey}`)
        setLoading(false)
        return {
            actors: res.data.cast.map(_transformActor),
            crew: res.data.crew.map(_transformCrew)
        }
    }

    const getMovieBySearch = async (query) => {
        const res = await request.get(`/search/movie?api_key=${_apiKey}&query=${query}`)
        setLoading(false)
        return res.data.results.map(_transformForSearch)
    }
    
    const getActorById = async (actorId) => {
        const res = await request.get(`/person/${actorId}?api_key=${_apiKey}`)
        setLoading(false)
        return _transformActor(res.data)
    }
    const getMoviesOfActor = async (actorId) => {
        const res = await request.get(`/person/${actorId}/movie_credits?api_key=${_apiKey}`)
        setLoading(false)
        return res.data.cast.slice(0,30).map(_transformMovieOfActor)
    }


    const _transformMovie = (movie) => {
        return {
            id: movie.id,
            title: movie.title,
            date: movie.release_date,
            rating: movie.vote_average,
            backdrop: movie.backdrop_path,
            poster: movie.poster_path,
            description: movie.overview,
            voteCount : movie.vote_count,
            status: movie.status,
            runtime: movie.runtime,
            genres: movie.genres? movie.genres.map(item => item.name) : false
        }
    }

    const _transformForSearch = (movie) => {
        return {
            id: movie.id,
            title: movie.title
        }
    }
    const _transformActor = (actor) => {
        return {
            id: actor.id,
            name: actor.name,
            char: actor.character,
            photo: actor.profile_path,
            birthday: actor.birthday,
            biography: actor.biography,
            birthPlace: actor.place_of_birth,
            deathday: actor.deathday
        }
    }
    const _transformCrew = (crew) => {
        if (crew.job==="Producer"||"Director"||"Original Music Composer"||"Director of Photography"){
            return {
                id: crew.id,
                name: crew.name,
                job: crew.job,
                photo: crew.profile_path
            }
        }
    }
    const _transformMovieOfActor = (movie) => {
        return {
            id: movie.id,
            title: movie.title,
            rating: movie.vote_average,
            poster: movie.poster_path
        }
    }

    return {
        getMovies,
        getMovieById,
        getMovieBySearch,
        getActorsInMovie,
        getActorById,
        getMoviesOfActor,
        loading,
        posterUrl
    }
}

export default useMovieService