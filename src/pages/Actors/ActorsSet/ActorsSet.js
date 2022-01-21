
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MainButton from '../../../components/Buttons/MainButton'
import useActorService from '../../../hooks/useActorService'
import SpinnerPage from '../../SpinnerPage/SpinnerPage'
import './actors-set.sass'


const ActorsSet = () => {

    const {getPopularActors,posterUrl, loading} = useActorService()
    const [list, setList] = useState([])
    const [loadedPage, setLoadedPage] = useState(1)

    useEffect(() => {

        setList([])
        onRequest(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const onRequest = (newRequest) => {
        const page = newRequest? (setLoadedPage(1),  1) : (setLoadedPage(prev => prev+1), loadedPage+1)
        getPopularActors(page)
            .then(res => setList(prev => [...prev, ...res]))
    }

    if (list.length<1 || loading) return <SpinnerPage/>
    return (
        <div className='actors_set'>
            <Typography
                // className='shows_set-title my-5'
                variant='h3'
                sx={{my:4}}
                >Top popular actors</Typography>
            <ul className='actors_set-list'>
                {list.map(item => <View posterUrl={posterUrl} actor={item} key={item.id}/>)}
            </ul>
            <MainButton
            // className="main_btn getmore"
                sx={{my:2}}
                onClick={() => onRequest(false)}
                >Get more</MainButton>
        </div>
    )
}
const View = ({actor, posterUrl}) => {
    return (
            <li className='actor'>
                <Link to={`/actors/${actor.id}`}>
                        <img src={`${posterUrl}${actor.photo}`} alt="poster"/>
                        <div className="actor_descr">
                            <div className='title'>{actor.name}</div>
                        </div>
                </Link>
            </li>
    )
}

export default ActorsSet
