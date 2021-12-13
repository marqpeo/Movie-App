import {useNavigate} from 'react-router-dom'
import './mainpage.sass'

const MainPage = () => {

    const navigate = useNavigate()
    const randomMovie = () => {
        const randomId = Math.floor(Math.random()*45000)
        navigate(`movie/${randomId}`)
    }

    return (
        <div className='page'>
            <div className="mainpage">
                <div className='mainpage_container'>
                    <h1>Movies, serials and much more</h1>
                    <button
                        onClick={randomMovie}
                        className='search_btn'>Get random movie</button>
                </div>    
            </div>
        </div>
    )
}

export default MainPage
