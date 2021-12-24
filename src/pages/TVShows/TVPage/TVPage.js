import { Route, Routes } from 'react-router-dom'
import SingleShow from '../SIngleShow/SingleShow'
import TVSet from '../TVSet/TVSet'

const TVPage = () => {
    return (
        <div className='tv_page'>
            <Routes>
                <Route index element={<TVSet/>}/>
                <Route path=':showId' element={<SingleShow/>}/>
            </Routes>
        </div>
    )
}

export default TVPage
