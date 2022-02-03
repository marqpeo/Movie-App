import { Routes,Route } from "react-router-dom"
import ActorsSet from "../ActorsSet/ActorsSet"
import SingleActorPage from "../SingleActorPage/SingleActorPage"


const ActorsPage = () => {
    return (
        <Routes>
            <Route index path='/*' element={<ActorsSet/>}/>
            <Route path='/:actorId' element={<SingleActorPage/>}/>
        </Routes>
    )
}

export default ActorsPage