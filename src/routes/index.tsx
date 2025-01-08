import { BrowserRouter, Routes, Route } from "react-router"
import { PokeList } from '../pages/pokeList'
import { Poke } from '../pages/poke'

const AppRoutes = () => (
    <>
        <BrowserRouter>
            <Routes>
                {/* <Route path='/pokedex-ts' element={<Navigate to="/pokedex-ts/home" />} />   */}
                <Route path='/' element={<PokeList />} />
                <Route path='/pokedex-ts/poke/:name' element={<Poke />} />
            </Routes>
        </BrowserRouter>
    </>
)


export { AppRoutes }