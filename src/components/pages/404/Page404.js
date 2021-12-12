import { useNavigate } from 'react-router-dom'
import img from '../../../style/svg/404.svg'

import './page404.sass'


const Page404 = () => {
    const navigate = useNavigate()
    return (
        <div className="page">
            <div className="page404">
                <img src={img} alt='error' />
                <span className='text'>Page not found</span>
                <button
                        className="search_btn goback"
                        onClick={() => navigate(-1)}
                        >Go back</button>
            </div>
        </div>
    )
}

export default Page404
