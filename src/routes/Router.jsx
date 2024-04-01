import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Create from "../pages/Create"
import Edit from "../pages/Edit"

const Router = ()=> {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<Create/>} path="/new"/>
                <Route path="/edit/:id" element={<Edit/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router