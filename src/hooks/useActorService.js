import { useState } from "react"
import {request, _apiKey, posterUrl, videoUrl} from "../service/request"

const useActorService = () => {

    const [loading, setLoading] = useState(true)

    const getPopularActors = async (loadedPage) => {
        const res = await request.get(`/person/popular?api_key=${_apiKey}&page=${loadedPage}`)
        setLoading(false)
        return res.data.results.map(_transformActors)//.filter((a,b) => b.popularity-a.popularity)
    } 
    

    const _transformActors = (actor) => {
        return {
            id: actor.id,
            name: actor.name,
            photo: actor.profile_path,
            popularity: actor.popularity,
            known_for: actor.known_for.map(movie=>{
                return {
                    id: movie.id,
                    type: movie.media_type,
                    title: movie.title,
                    rating: movie.vote_average
                }
            })
        }
    }
    return {
        getPopularActors,
        posterUrl,
        videoUrl,
        loading
    }
}

export default useActorService