/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useMovieService from '../../../hooks/useMovieService'
import MoviesList from '../../../components/MoviesList/MoviesList'
import SpinnerPage from '../../SpinnerPage/SpinnerPage'

import './single-actor-page.sass'
import ShowsList from '../../../components/TVShowsList/ShowsList'
import MainButton from '../../../components/Buttons/MainButton'

const SingleActorPage = () => {
    const {actorId} = useParams()
    const navigate = useNavigate()
    const {getActorById,posterUrl,loading} = useMovieService()

    const [actor, setActor] = useState({})
    const [bioStyle, setBioStyle] = useState('text')

    useEffect(() => {
        getActorById(actorId)
            .then(setActor)
        window.scrollTo(0, 0)           
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
                    <h1 className="name">{name}</h1>
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
                </div>
            </div>
            <MoviesList type='actor' actorId={actorId} actorName={name}/>
            <ShowsList type='actor' actorId={actorId} actorName={name}/>
            <MainButton
                sx={{   position :'absolute',
                        right: '10%',
                        top: '10%'}}
                onClick={() => navigate(-1)}
                >Go Back</MainButton>
        </div>
    )
}

export default SingleActorPage
