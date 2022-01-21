import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MainButton from '../../../components/Buttons/MainButton'

import useTVService from '../../../hooks/useTVService'
import SpinnerPage from '../../SpinnerPage/SpinnerPage'
import './tv-set.sass'

const TVSet = () => {
    
    const {getTVShowsSet,posterUrl, loading} = useTVService()
    const [list, setList] = useState([])
    const [loadedPage, setLoadedPage] = useState(1)

    useEffect(() => {
        setList([])
        onRequest(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const onRequest = (newRequest) => {
        const page = newRequest? (setLoadedPage(1),  1) : (setLoadedPage(prev => prev+1), loadedPage+1)
        getTVShowsSet(page)
            .then(res => setList(prev=> [...prev, ...res]))
    }

    if (list.length<1 || loading) return <SpinnerPage/>

    return (
        <Box sx={{textAlign:'center'}}>
            <Typography
                // className='shows_set-title my-5'
                variant='h3'
                sx={{my:4}}
                >Top TV Shows</Typography>
            <ul className='shows_set-list'>
                {list.map(item => <View posterUrl={posterUrl} show={item} key={item.id}/>)}
            </ul>
            <MainButton
                sx={{my:2}}
                onClick={() => onRequest(false)}
                >Get more</MainButton>
        </Box>
    )
}
const View = ({show, posterUrl}) => {
    
    return (
            <li className='show'>
                <Link to={`/tv_shows/${show.id}`}>
                        <img src={`${posterUrl}${show.poster}`} alt="poster"/>
                            <div className="show_descr">
                                <div className='title'>{show.title}</div>
                                <div className='rating'>{show.rating}</div>
                            </div>                     
                </Link>
            </li>
    )
}

export default TVSet