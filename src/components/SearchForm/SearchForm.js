import { Form, FormControl } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import './searchform.sass'

const SearchForm = ({defaultValue}) => {

    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = ({movie}) => {
        reset()
        navigate(`/search?q=${movie}`)
    }

    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex">
                <FormControl
                defaultValue={defaultValue}
                {...register("movie")}
                className="me-2"
                type="search"
                placeholder="Search"
                />
                <button
                    className='btn btn-danger'
                    type="submit">Search</button>
        </Form>
    )
}

export default SearchForm