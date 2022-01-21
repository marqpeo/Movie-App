import { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { AppBar, Box, Container, IconButton, Menu, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


import SearchForm from "../SearchForm/SearchForm";
import './appheader.sass'
import logo from "../../style/svg/movie_app.svg"

// const Search =    styled('form')( ({ theme }) => ({
const navLinksStyle = ({isActive}) => ({
  display: 'block',
  fontSize: '1.5rem',
  color: 'white',
  textDecoration: 'none',
  borderBottom: isActive?'solid':'none',
  borderColor: isActive?'#DF1313':'none'
  // ,
  // "&:hover" :{
  //   color: 'red',
  //   borderBottom: 'solid',
  //   borderColor: '#DF1313',
  //   transform: 'translateY(-5px)'
  // } 
})

const Appheader = () => {

    const navlinks = [
        {path:'/movies', text:'Movies', id:0},
        {path:'/tv_shows', text:'TV Shows', id:1},
        {path:'/actors', text:'Actors', id:2}
    ]

    const [anchorElNav, setAnchorElNav] = useState(null);


    return ( 
      <AppBar
        sx={{bgcolor:'rgba(11, 11, 11, 0.8)'}}
        position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{ display: { xs: 'none', md: 'flex' },justifyContent: 'space-between', alignItems:'center', width:1 }}>

             <Box sx={{display:'flex', alignItems:'center'}}>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>

              <Box sx={{display: 'flex'}}>
                {navlinks.map(({path,id,text}) => (
                  <Box key={id} sx={{ mx: 2, my: 2, display: 'block' }}>
                    <NavLink style={navLinksStyle} to={path}>{text}</NavLink>
                  </Box>
                ))}
              </Box>
            </Box> 
            <SearchForm/>

          </Box>


{/* _______________________________________________________________________________________________________ */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={event => setAnchorElNav(event.currentTarget)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            {navlinks.map(({path,id,text}) => (
              <Box
                sx={{ my: 2, color: 'white', display: 'block' }}
                key={id}>
                <NavLink to={path}>{text}</NavLink>
              </Box>
            ))}
            <NavLink to='/search'>Search</NavLink>
            </Menu>
          </Box>

          <Box
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
    )
}

export default Appheader
// return (
//     <>
//     <nav className="navbar navbar-expand-lg fixed-top">
//     <div className="container-fluid">

//         <Link className="navbar-brand mx-5 fs-2" to="/">
//             <img src={logo} alt="logo" />
//         </Link>

//         <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>


//         <div className="collapse navbar-collapse" id="navbarSupportedContent">

//         <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
//             {
//                 navlinks.map(item => {
//                     return(
//                         <li key={item.id} className="nav-item me-2 text-center">
//                         <NavLink className={activeStyle} to={item.path}>{item.text}</NavLink>
//                         </li> 
//                     )
//                 })
//             }
//         </ul>
        
//         <SearchForm/>
        
//         </div>
//     </div>
//     </nav>
//     </>
// )