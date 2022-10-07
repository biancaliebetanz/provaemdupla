import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exercicio1 from '../src/pages/exercicio1/index.js'
import Exercicio2 from '../src/pages/exercicio2/index.js'

export default function index(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Exercicio1/>} />
        <Route path='/signo' element={<Exercicio2/>} />
        </Routes>
        </BrowserRouter>
    )
}
