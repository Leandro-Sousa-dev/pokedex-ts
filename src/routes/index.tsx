import { BrowserRouter, Routes, Route} from "react-router"
import { PokeList } from '../pages/pokeList'
import { Poke } from '../pages/poke'

const AppRoutes = () => (
    <>
        <BrowserRouter basename="/pokedex-ts">
            <Routes>
                <Route path='/' element={<PokeList />} />
                <Route path='/poke/:name' element={<Poke />} />
            </Routes>
        </BrowserRouter>
    </>
)


export { AppRoutes }