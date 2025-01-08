import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import { PokeList } from '../pages/pokeList'
import { Poke } from '../pages/poke'

const AppRoutes = () => (
    <>
        <BrowserRouter basename="/">
            <Routes>
                <Route path='/' element={<Navigate to="/home" />} />  
                <Route path='/home' element={<PokeList />} />
                <Route path='/poke/:name' element={<Poke />} />
            </Routes>
        </BrowserRouter>
    </>
)


export { AppRoutes }