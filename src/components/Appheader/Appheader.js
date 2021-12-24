import { Link, NavLink } from "react-router-dom"

import SearchForm from "../SearchForm/SearchForm";
import './appheader.sass'
import logo from "../../style/svg/movie_app.svg"

const Appheader = () => {

    const navlinks = [
        {path:'/movies', text:'Movies', id:0},
        {path:'/tv_shows', text:'TV Shows', id:1},
        {path:'/actors', text:'Actors', id:2}
    ]

    const activeStyle = ({isActive}) => "nav-link" + (isActive ? ' activated' : '')

    return (
        <>
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
        </nav>
        </>
    )
}

export default Appheader