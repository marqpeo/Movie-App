import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useTVService from "../../hooks/useTVService"
import Spinner from "../Spinner/Spinner"

import './shows-list.sass'

const ShowsList = ({type, showId, actorId, actorName}) => {

    const [showList, setShowList] = useState([])

    const {getTVShowsOfActor,getSimilarShows,loading, posterUrl} = useTVService()


    const getData = () =>  {
        switch (type) {
            case "actor":
                return getTVShowsOfActor(actorId)
            case "show" : 
                return getSimilarShows(showId)
            default: return false
            }
    }

    useEffect(() => {
        getData()
            .then(setShowList)
    }, [showId, actorId])

    if(loading) return <Spinner/>
    
    
    return (
            <div className="shows">
                <div className="shows_title"><h2>Top {actorName||'similar'} TV shows :</h2></div>
                    <div className="shows_list">
                    {
                        showList.map(item => {
                            return ( 
                                <Link key={item.id} to={`/tv_shows/${item.id}`} className="show">
                                    <img src={`${posterUrl}${item.poster}`} alt={item.name}/>
                                    <div className="show_descr">
                                        <div className="show_descr-name">{item.title}</div>
                                        <div className="show_descr-rating">{item.rating}</div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                    </div>
            </div>
    )
}

export default ShowsList