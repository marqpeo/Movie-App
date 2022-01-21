/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

import useMovieService from "../../hooks/useMovieService";
import SearchForm from "../../components/SearchForm/SearchForm";
import './searchpage.sass'

const SearchPage = () => {

    console.log(useParams());
    const {query} = useParams()
    const [listMovies, setListMovies] = useState([])

    const {getMovieBySearch} = useMovieService()

    useEffect(() => {
        getMovieBySearch(query)
        .then(res => setListMovies(res))
    },[query])

    return (
        <div className="page">
            <div className="search_page">
                <SearchForm defaultValue={query}/>
                <div className="search_page-results">
                    {
                        listMovies.map(item => 
                                        <Link
                                            key={item.id}
                                            className="link"
                                            to={`/movies/${item.id}`}
                                            >{item.title}</Link>
                                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchPage
