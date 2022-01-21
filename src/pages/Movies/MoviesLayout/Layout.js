import { CheckBoxOutlineBlank } from "@mui/icons-material";
import { Box, styled } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import MainButton from "../../../components/Buttons/MainButton";
import './layout.sass'

const StyledNavLink = styled(NavLink)(() => ({
    padding: '0.2rem 0.4rem',
    color:'white'
}))

const Layout = () => {
    
    const navLinks = [
        {path:'/movies/top_rated', text:'Top rated', id:0},
        {path:'/movies/popular', text:'Popular', id:1},
        {path:'/movies/upcoming', text:'Upcoming', id:2} 
    ]

    return (
        <Box sx={{  d: 'flex',
                    flexDirection:'column',
                    alignItems:'center', }}
                    >
            <Box sx={{pt:'2.5rem',w:'90%'}}>
            {   navLinks.map(({id,path,text})=> {
                    return(
                        <MainButton
                            sx={{mx:1,p:0}}
                            >
                            <StyledNavLink
                                key={id}
                                to={path}
                                sx={{textDecoration:'none'}}
                                >
                                {text}
                            </StyledNavLink>
                        </MainButton>
                    )   })
            }
            </Box>
            <Outlet/>
        </Box>
    )
}

export default Layout
