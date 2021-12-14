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

    const getMovieBySearch = async (query) => {
        const res = await request.get(`/search/movie?api_key=${_apiKey}&query=${query}`)
        setLoading(false)
        return res.data.results.map(_transformForSearch)
    }

    const getActorsInMovie = async (movieId) => {
        const res = await request.get(`/movie/${movieId}/credits?api_key=${_apiKey}`)
        setLoading(false)
        return res.data.cast.map(_transformActor)
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
            photo: actor.profile_path
        }
    }
    return {
        getMovies,
        getMovieById,
        getMovieBySearch,
        loading,
        getActorsInMovie,
        posterUrl
    }
}

export default useMovieService