import { useState } from "react"
import {request, _apiKey, posterUrl, videoUrl} from "../service/request"

const useTVService = () => {
    const [loading, setLoading] = useState(true)

    const getTVShowsSet = async (loadedPage) => {
        const res = await request.get(`/tv/popular?api_key=${_apiKey}&page=${loadedPage}`)
        setLoading(false)
        return res.data.results.map(_transformShowSet)
    }
    const getTVShow = async (showId) => {
        const res = await request.get(`/tv/${showId}?api_key=${_apiKey}`)
        setLoading(false)
        console.log(res.data);
        return _transformTVShow(res.data)
    }

    const _transformShowSet = (show) => {
        return {
            id: show.id,
            title: show.name,
            poster: show.poster_path,
            rating: show.vote_average
        }
    }
    const _transformTVShow = (show) => {
        return {
            id: show.id,
            title: show.name,
            poster: show.poster_path,
            rating: show.vote_average,
            voteCount: show.vote_count,
            description: show.overview,
            genres: show.genres.map(g => g.name).join(', '),
            numOfSeasons: show.number_of_seasons,
            tagline: show.tagline,
            firstEpisode: show.first_air_date,
            episodeRunTime: show.episode_run_time.join('/'),
            countries: show.production_countries.map(item=>item.name).join(', '),
            homepage: show.homepage
        }
    }
    return {
        getTVShowsSet,
        getTVShow,
        loading,
        posterUrl,
        videoUrl
    }
}

export default useTVService