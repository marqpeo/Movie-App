/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, NavLink } from "react-router-dom"

import SearchForm from "../SearchForm/SearchForm";
import './appheader.sass'

const Appheader = () => {

    const navlinks = [
        {path:'/', text:'Home', id:0},
        {path:'/top_rated', text:'Top rated', id:1},
        {path:'/popular', text:'Popular', id:2},
        {path:'/upcoming', text:'Upcoming', id:3}] 

    const activeStyle = ({isActive}) => "nav-link" + (isActive ? ' activated' : '')

    return (
        <>
        <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">

            <Link className="navbar-brand mx-5 fs-2" to="/">Movie app</Link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
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



// eslint-disable-next-line no-lone-blocks
{/* <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container-fluid">

        <Link className="navbar-brand mx-5 fs-2" to="/">Movie app</Link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
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