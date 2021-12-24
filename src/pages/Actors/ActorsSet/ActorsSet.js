
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
            <h1 className='actors_set-title'>Top popular actors </h1>
            <ul className='actors_set-list'>
                {list.map(item => <View posterUrl={posterUrl} actor={item} key={item.id}/>)}
            </ul>
            <button className="main_btn getmore"
                    onClick={() => onRequest(false)}
                    >Get more</button>
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
