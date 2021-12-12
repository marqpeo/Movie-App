/* eslint-disable no-unused-vars */
import { useEffect,useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import movieService from "../../hooks/useMovieService";
import './searchform.sass'


const SearchForm = ({defaultValue=''}) => {

    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = ({movie}) => {
        reset()
        navigate(`/search/${movie}`)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex searchForm">
                <input
                defaultValue={defaultValue}
                {...register("movie")}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                />
                <button
                className='search_btn' //it was "btn btn-outline"
                type="submit">Search</button>
        </form>
    )
}



export default SearchForm



// const visible = visibleList? ' visible' : ''

// <div
//                 className={`results${visible}`}>

//                 !(visibleList)? null : 
//         listMovies.map(item => 
//              <Link
//           //        key={item.id}
//           //        className="link"
//           //        to={`/movie/${item.id}`}
//           //        onClick={() => reset()}
//           //        >{item.title}</Link>
//           //        )

//             </div>
// useEffect(() => {
//     if (watch("movie").length>0 && visibleList){
//         getMovieBySearch(watch("movie"))
//         .then(res => setListMovies(res))
//             .then(() => setVisibleList(true))
//         }
//     else if(watch("movie").length<1) setListMovies([])
// // eslint-disable-next-line react-hooks/exhaustive-deps
// },[watch("movie")])