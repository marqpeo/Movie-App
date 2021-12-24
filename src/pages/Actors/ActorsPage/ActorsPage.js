import { Routes,Route } from "react-router-dom"
import ActorsSet from "../ActorsSet/ActorsSet"
import SingleActorPage from "../SingleActorPage/SingleActorPage"


const ActorsPage = () => {
    return (
        <div className="actors_page">
            <Routes>
                <Route path='/' element={<ActorsSet/>}/>
                <Route path='/:actorId' element={<SingleActorPage/>}/>
            </Routes>
        </div>
    )
}

export default ActorsPage