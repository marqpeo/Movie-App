/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useMovieService from '../../../hooks/useMovieService'
import MoviesList from '../../MoviesList/MoviesList'
import SpinnerPage from '../../Spinner/SpinnerPage'

import './single-actor-page.sass'

const SingleActorPage = () => {
    const {actorId} = useParams()
    const navigate = useNavigate()
    const {getActorById,posterUrl,loading} = useMovieService()

    const [actor, setActor] = useState({})
    const [bioStyle, setBioStyle] = useState('text')

    useEffect(() => {
        getActorById(actorId)
            .then(setActor)
    }, [])

    if(loading) return <SpinnerPage/>

    
    const {name, biography,birthPlace,birthday,deathday,photo} = actor


    return (
        <div className='actor_page'>
            <div className="actor_details">
                <div className="actor_photo">
                    <img src={`${posterUrl}${photo}`} alt={name}/>
                </div>

                <div className="actor_info">
                    <h1 className="name">{name}
                    {/* {date?`(${date.slice(0,4)})`:null} */}
                    </h1>
                    <p><span className="info_type">Birthday:</span><span className='data'> {birthday} </span></p>
                    {
                        deathday? ( <p><span className="info_type">Deathday:</span>
                                        <span className='data'> {deathday}</span></p> ) : null
                    }
                    <p><span className="info_type">BirthPlace:</span><span className='data'>{birthPlace}</span></p>
                    <div className='biography'>
                        <span className="info_type">Biography: </span><br/>
                        <div className={bioStyle}>{biography}</div> 
                        <div
                            onClick={() => setBioStyle(prev => prev==='text'?'text full':'text')}
                            className="open_bio"
                            >{bioStyle==='text'?'Read more':'Hide'}</div>
                    </div>
                    <button className="search_btn goback"
                            onClick={() => navigate(-1)}
                            >Go back</button>
                </div>
            </div>
            <MoviesList type='actor' actorId={actorId} actorName={name}/>
        </div>
    )
}

export default SingleActorPage
