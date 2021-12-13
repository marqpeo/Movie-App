/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import movieService from "../../../hooks/useMovieService";
import SearchForm from "../../SearchForm/SearchForm";
import './searchpage.sass'

const SearchPage = () => {

    const {movie} = useParams()
    const [listMovies, setListMovies] = useState([])

    const {getMovieBySearch} = movieService()

    useEffect(() => {
        getMovieBySearch(movie)
        .then(res => setListMovies(res))
    },[movie])

    return (
        <div className="page">
            <div className="search_page">
                <SearchForm defaultValue={movie}/>
                <div className="search_page-results">
                    {
                        listMovies.map(item => 
                                        <Link
                                            key={item.id}
                                            className="link"
                                            to={`/movie/${item.id}`}
                                            >{item.title}</Link>
                                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchPage
