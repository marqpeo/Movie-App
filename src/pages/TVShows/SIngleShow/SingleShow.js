import { useEffect, useState } from "react"
import { useNavigate,useParams } from "react-router-dom"
import MainButton from "../../../components/Buttons/MainButton"
import ShowInfo from "../../../components/ShowInfo/ShowInfo"
import Spinner from "../../../components/Spinner/Spinner"
import ShowsList from "../../../components/TVShowsList/ShowsList"
import useTVService from "../../../hooks/useTVService"

import './single-show.sass'

const SingleShow = () => {
    
    const {showId} = useParams()
    const navigate = useNavigate()
    const {getTVShow,loading,posterUrl} = useTVService()
    const [show, setShow] = useState({})
    
    useEffect(() => {
        getTVShow(showId)
            .then(setShow)
        window.scrollTo(0, 0)
    },[showId])

    if (loading) return <Spinner/>
    
    return (
        <div className="single_show">

            <div className="single_show-details">
                <div className="show_poster">
                    <img src={`${posterUrl}${show.poster}`} alt='poster'/>
                </div>

                <ShowInfo show={show}/>
                
            </div>
            <MainButton
                    sx={{   position :'absolute',
                            right: '10%',
                            top: '10%'}}
                    onClick={() => navigate(-1)}
                    >Go Back</MainButton>
            <ShowsList type='show' showId={showId}/>
        </div>
    )
}

export default SingleShow