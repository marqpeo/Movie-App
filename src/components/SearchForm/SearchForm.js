import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import './searchform.sass'

const SearchForm = ({defaultValue}) => {

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
                placeholder='🔍'
                />
                <button
                className='search_btn' //"btn btn-outline"
                type="submit">Search</button>
        </form>
    )
}

export default SearchForm