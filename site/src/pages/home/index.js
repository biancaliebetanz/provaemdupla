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
                <p></p>
                <Link to='/exercicio4'> Exercicio 4 </Link> 
                <p></p>
                <Link to='/exercicio5'> Exercicio 5 </Link> 
                <p></p>
                <Link to='/exercicio6'> Exercicio 6 </Link> 
                <p></p>
                <Link to='/exercicio7'> Exercicio 7 </Link> 
                <p></p>
                <Link to='/exercicio8'> Exercicio 8 </Link> 
                <p></p>
                <Link to='/exercicio9'> Exercicio 9 </Link> 
                <p></p>
                <Link to='/exercicio10'> Exercicio 10</Link>
                <p></p>
                <Link to='/exercicio11'> Exercicio 11</Link>
                <p></p>
                <Link to='/exercicio12'> Exercicio 12 (Quero café) </Link>
                <p></p>
                <Link to='/exercicio13'> Exercicio 13 (JOGO DA VELHA) </Link>
            </div>

            </div>
        </main>
    )
}