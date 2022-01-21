import { Typography } from '@mui/material'
import './mainpage.sass'

const MainPage = () => {
    //__________________________________________________________________________________
    // const randomMovie = () => {
    //     const randomId = Math.floor(Math.random()*45000)
    //     navigate(`movie/${randomId}`)
    // }
    //__________________________________________________________________________________

    return (
            <div className="mainpage">
                <div className='mainpage_container'>
                    <Typography
                        variant='h1'
                        >
                        Movies, serials and much more
                    </Typography>
                    {/* __________________________________________________________________________________ */}
                    {/* <h1>Movies, serials and much more</h1> */}
                    {/* <button
                        onClick={randomMovie}
                        className='search_btn'>Get random movie</button>
                        THE BUTTON IS IN DEVELOPMENT
                        */}
                    {/* __________________________________________________________________________________ */}
                </div>    
            </div>
    )
}

export default MainPage
