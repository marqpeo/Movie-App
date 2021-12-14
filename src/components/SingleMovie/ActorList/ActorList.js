/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import ScrollContainer from "react-indiana-drag-scroll"

import useMovieService from "../../../hooks/useMovieService"
import './actorList.sass'

const ActorList = ({movieId}) => {

    const {getActorsInMovie,posterUrl,loading} = useMovieService()
    const [actorList, setActorList] = useState([])


    useEffect(() => {
        getActorsInMovie(movieId)
            .then(res => setActorList(res))
            .catch(err => console.log(err))
    })

    return (
        <div className="actors">
            <div className="actors_title"><h2>The movie actors</h2></div>
                <ScrollContainer className="actors_list" horizontal>
                {
                    actorList.map(item => {
                        return ( 
                            <div draggable className="actor">
                                <img src={`${posterUrl}${item.photo}`} alt={item.name}/>
                                <div className="actor_descr">
                                    <div className="actor_descr-name">{item.name}</div>
                                    <div className="actor_descr-char">Character: {item.char}</div>
                                </div>
                            </div>
                        )
                    })
                }
                </ScrollContainer>
        </div>
    )
}
export default ActorList
