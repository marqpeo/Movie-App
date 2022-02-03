import { NavLink, Outlet } from "react-router-dom";
import './layout.sass'

const Layout = () => {
    const navLinks = [
        {path:'/movies/top_rated', text:'Top rated', id:0},
        {path:'/movies/popular', text:'Popular', id:1},
        {path:'/movies/upcoming', text:'Upcoming', id:2} 
    ]

    const activeClass = ({isActive})=> 'btn btn-danger' + (isActive?' isActive':'')
    return (
        <div className="layout">
            <div className="layout_links">
            {   navLinks.map(item=> {
                    return(
                        <NavLink
                            key={item.id}
                            className={activeClass}
                            to={item.path}
                            >
                            {item.text}
                        </NavLink>
                    )   })
            }
            </div>
            <Outlet/>
        </div>
    )
}

export default Layout
