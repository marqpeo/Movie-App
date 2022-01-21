import { useNavigate } from 'react-router-dom'
import MainButton from '../../components/Buttons/MainButton'


import img from '../../style/svg/404.svg'
import './page404.sass'


const Page404 = () => {
    const navigate = useNavigate()
    return (
            <div className="page404">
                <img src={img} alt='error' />
                <MainButton
                        onClick={() => navigate(-1)}
                        >Go back</MainButton>
            </div>
    )
}

export default Page404
