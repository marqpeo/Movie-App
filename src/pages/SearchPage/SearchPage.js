/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom"

import useMovieService from "../../hooks/useMovieService";
import SearchForm from "../../components/SearchForm/SearchForm";
import './searchpage.sass'

const SearchPage = () => {

    const {getMovieBySearch} = useMovieService()
    const [listMovies, setListMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams({})

    const q = searchParams.get('q')
    

    useEffect(() => {
        q===''? setListMovies([]) : getMovieBySearch(q).then(res => setListMovies(res))
        
    },[q])

    return (
        <div className="page">
            <div className="search_page">
                <SearchForm defaultValue={q}/>
                <div className="search_page-results">
                    {
                        q===''? 'Please type your text in the search form' : 
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
