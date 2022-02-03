import { useEffect, useState } from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import { useNavigate,useParams } from "react-router-dom"
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
    },[showId])

    if (loading) return <Spinner/>
    
    return (
        <Container className="single_show pt-5">

            <Row className="single_show-details mt-5">
                <Col lg='3' className="show_poster text-center">
                    <Image fluid src={`${posterUrl}${show.poster}`} alt='poster'/>
                </Col>
                <Col>
                    <ShowInfo show={show}/>
                </Col>
            </Row>
            <button className="btn btn-danger goback"
                    onClick={() => navigate(-1)}
                    >Go back</button>
            <ShowsList type='show' showId={showId}/>
        </Container>
    )
}

export default SingleShow