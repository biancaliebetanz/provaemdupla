import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home'
import Exercicio1 from './pages/exercicio1'
import Exercicio2 from './pages/exercicio2'

export default function index(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/exercicio1' element={<Exercicio1/>} />
            <Route path='/exercicio2' element={<Exercicio2/>} />
        </Routes>
        </BrowserRouter>
    )
}
