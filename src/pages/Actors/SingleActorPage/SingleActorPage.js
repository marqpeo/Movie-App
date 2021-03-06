/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useMovieService from '../../../hooks/useMovieService'
import MoviesList from '../../../components/MoviesList/MoviesList'
import SpinnerPage from '../../SpinnerPage/SpinnerPage'

import './single-actor-page.sass'
import ShowsList from '../../../components/TVShowsList/ShowsList'
import { Col, Container, Image, Row } from 'react-bootstrap'

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
        <Container className='actor_page pt-5'>

            <Row className="actor_details mt-5">
                <Col lg='3' className="actor_photo text-center">
                    <Image src={`${posterUrl}${photo}`} alt={name}/>
                </Col>

                <Col className="actor_info">
                    <h1 className="mb-4">{name}</h1>
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
                </Col>
            </Row>
            <button className="btn btn-danger goback"
                    onClick={() => navigate(-1)}
                    >Go back</button>



            <MoviesList type='actor' actorId={actorId} actorName={name}/>
            <ShowsList type='actor' actorId={actorId} actorName={name}/>
        </Container>
    )
}

export default SingleActorPage
