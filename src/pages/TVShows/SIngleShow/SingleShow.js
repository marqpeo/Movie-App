import { useEffect, useState } from "react"
import { useNavigate,useParams } from "react-router-dom"
import ShowInfo from "../../../components/ShowInfo/ShowInfo"
import Spinner from "../../../components/Spinner/Spinner"
import useTVService from "../../../hooks/useTVService"

import './single-show.sass'

const SingleShow = () => {
    
    const {showId} = useParams()
    const navigate = useNavigate()
    const {getTVShow,loading,posterUrl,videoUrl} = useTVService()
    const [show, setShow] = useState({})
    
    useEffect(() => {
        getTVShow(showId)
            .then(setShow)
    },[showId])

    if (loading) return <Spinner/>
    
    
    return (
        <div className="single_show">

            <div className="single_show-details">
                <div className="show_poster">
                    <img src={`${posterUrl}${show.poster}`} alt='poster'/>
                </div>

                <ShowInfo show={show}/>
                <button className="main_btn goback"
                        onClick={() => navigate(-1)}
                        >Go back</button>
                
            </div>

            {/* <ActorList movieId={movieId}/>
            <MoviesList type="movie" movieId={movieId}/> */}
        </div>
    )
}

export default SingleShow