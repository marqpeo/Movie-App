import { Link, NavLink } from "react-router-dom"

import SearchForm from "../SearchForm/SearchForm";
import './appheader.sass'
import logo from "../../style/svg/movie_app.svg"
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";

const Appheader = () => {

    const navlinks = [
        {path:'/movies', text:'Movies', id:0},
        {path:'/tv_shows', text:'TV Shows', id:1},
        {path:'/actors', text:'Actors', id:2}
    ]

    const [expanded, setExpanded] = useState(false);

    const activeStyle = ({isActive}) => "nav-link me-2 text-center text-white" + (isActive ? ' activated' : '')

    return (
        <Navbar fixed="top" variant="dark" expand="lg" expanded={expanded}>
            <Container fluid>
                <Link className="mx-5 fs-2" to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <Navbar.Toggle
                    aria-controls="navbarScroll" 
                    onClick={() => setExpanded(expanded ? false : true)} />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0">
                        {
                            navlinks.map(item => {
                                return(
                                        <NavLink onClick={() => setExpanded(false)}
                                                 className={activeStyle}
                                                 to={item.path}
                                                 >{item.text}</NavLink>
                                )
                            })
                        }
                    </Nav>
                    
                    <SearchForm/>
                </Navbar.Collapse>
            </Container>
            </Navbar>
       
    )
}

export default Appheader


// eslint-disable-next-line no-lone-blocks
{/*
<nav className="navbar navbar-expand-lg fixed-top">
<div className="container-fluid">

    <Link className="navbar-brand mx-5 fs-2" to="/">
        <img src={logo} alt="logo" />
    </Link>

    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
        {
            navlinks.map(item => {
                return(
                    <li key={item.id} className="nav-item me-2 text-center">
                        <NavLink className={activeStyle} to={item.path}>{item.text}</NavLink>
                    </li> 
                )
            })
        }
    </ul>
    
    <SearchForm/>
    
    </div>
</div>
</nav> */}