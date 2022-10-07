import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exercicio1 from '../src/pages/exercicio1/index.js'

export default function index(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Exercicio1/>} />
        </Routes>
        </BrowserRouter>
    )
}
