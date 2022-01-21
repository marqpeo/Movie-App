import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import SingleShow from '../SIngleShow/SingleShow'
import TVSet from '../TVSet/TVSet'

const TVPage = () => {
    return (
        <Box>
            <Routes>
                <Route index element={<TVSet/>}/>
                <Route path=':showId' element={<SingleShow/>}/>
            </Routes>
        </Box>
    )
}

export default TVPage
