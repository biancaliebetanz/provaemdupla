import { Link } from "react-router-dom";
import './index.scss'


export default function Index(){
    return(
        <main className="fundo3">
            <div className="menu">
                
            <h1> Prova em Dupla</h1>
            <h2> Bianca Liebetanz e Camile Vitória Rosa Santos</h2>
            <div>
                <Link to='/exercicio1'> Exercicio 1 </Link>
                <p></p>
                <Link to='/exercicio2'> Exercicio 2 </Link>
                <p></p>
                <Link to='/exercicio3'> Exercicio 3 </Link> 
            </div>

            </div>
        </main>
    )
}