import { useState } from "react";
import {request, _apiKey, posterUrl, videoUrl} from '../service/request'


const useMovieService = () => {

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
    
    const getCreditsInMovie = async (movieId) => {
        const res = await request.get(`/movie/${movieId}/credits?api_key=${_apiKey}`)
        setLoading(false)
        return {
            actors: res.data.cast.map(_transformActor).slice(0,15),
            crew: _transformCrew(res.data.crew)
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
        return res.data.cast
                    .map(_transformMoviesList)
                    .sort((a,b)=> b.rating-a.rating)
                    .slice(0,20)
    }
    const getSimilarMovies = async (movieId) => {
        const res = await (await request.get(`/movie/${movieId}/similar?api_key=${_apiKey}`)).data.results
        setLoading(false)
        return res.map(_transformMoviesList).sort((a,b)=> b.rating-a.rating)
    }
    const getMovieVideos = async (movieId) => {
        const res = await (await request.get(`/movie/${movieId}/videos?api_key=${_apiKey}`))
                        .data.results
                        .filter(item=> item.site==="YouTube"&&item.type==="Trailer")
        return res.map(_transformVideosOfMovie)
    }

// ======================================================================================
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
// ======================================================================================
    const _transformForSearch = (movie) => {
        return {
            id: movie.id,
            title: movie.title
        }
    }
// ======================================================================================
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
// ======================================================================================
    const _transformCrew = (crew) => {
        // console.log(crew);
        const crewObj = {}
        crew.filter( ({job}) => job === "Producer"||
                                job === "Director"||
                                job === "Original Music Composer"||
                                job ===  "Director of Photography") 
            .forEach(({job,name})=> {
                    const jobName = job.split(' ').join('_').toLowerCase()
                    if (!crewObj.hasOwnProperty(jobName)){
                        crewObj[jobName]= []
                    }
                        crewObj[jobName].push(name)
                })
        for (const key in crewObj) {
            crewObj[key] = crewObj[key].map((item,i,arr) => i===arr.length-1?item:`${item}, `).join('')
        }
        return crewObj
    }
// ======================================================================================
    const _transformMoviesList = (movie) => {
        return {
            id: movie.id,
            title: movie.title,
            rating: movie.vote_average.toFixed(1),
            poster: movie.poster_path
        }
    }
    const _transformVideosOfMovie = (movie) => {
        return {
            id: movie.id,
            key: movie.key,
            name: movie.name
        }
    }

    return {
        getMovies,
        getMovieById,
        getMovieBySearch,
        getCreditsInMovie,
        getActorById,
        getMoviesOfActor,
        getSimilarMovies,
        getMovieVideos,
        loading,
        posterUrl,
        videoUrl
    }
}

export default useMovieService