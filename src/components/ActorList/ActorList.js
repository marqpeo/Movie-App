/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

import useMovieService from "../../hooks/useMovieService"
import Spinner from '../Spinner/Spinner'
import './actorList.sass'

const ActorList = ({movieId}) => {

    const {getCreditsInMovie,posterUrl,loading} = useMovieService()
    const [actorList, setActorList] = useState([])


    useEffect(() => {
        getCreditsInMovie(movieId)
            .then(res => setActorList(res.actors))
            .catch(err => console.log(err))
    },[movieId])

    if(loading) return <Spinner/>
    return (

        <div className="actors">
            <div className="actors_title"><h2>The movie's actors :</h2></div>
                <div className="actors_list">
                {
                    actorList.map(item => {
                        return ( 
                            <Link
                                key={item.id}
                                to={`/actors/${item.id}`}
                                className="actor">
                                <img src={`${posterUrl}${item.photo}`} alt={item.name}/>
                                <div className="actor_descr">
                                    <div className="actor_descr-name">{item.name}</div>
                                    <div className="actor_descr-char">{item.char}</div>
                                </div>
                            </Link>
                        )
                    })
                }
                </div>
        </div>
    )
}
export default ActorList
