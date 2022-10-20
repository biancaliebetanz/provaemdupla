import { useEffect, useState } from 'react'
import './index.scss'

export default function Index(){

    const [p1, setP1] = useState();
    const [p2, setP2] = useState();
    const [p3, setP3] = useState();
    const [p4, setP4] = useState();
    const [p5, setP5] = useState();
    const [p6, setP6] = useState();
    const [p7, setP7] = useState();
    const [p8, setP8] = useState();
    const [p9, setP9] = useState();

    const [resultado, setResultado] = useState();
    const [vencedor, setVencedor] = useState('Iniciar jogo');

    function delay(milliseconds) {
        return new Promise (resolve => setTimeout(resolve, milliseconds)) // acabar com o delay
    }

    function Velha(pos){
        if(pos == true){
            return false;
        }
        else{
            return true;
        }
    }


    function exibir(pos){
        if(pos == true)
        return './images/xis.webp'
        if (pos == false)
        return './images/bolinha.webp'
        else
        return './images/click.webp'
    }

    function resul(){
        if(resultado == true){
            setVencedor('O vencedor é xis')
        }
        else if(resultado == false){
            setVencedor('O vencedor é bolinha')
        }
        else{
            setVencedor('Iniciar jogo')
        }
    }

    function jogo(){
        if(p1 == p2 && p2 == p3)
        setResultado(p1)
    {}
    }

    useEffect(() => {
        jogo()
        resul()
    }, [p1, p2, p3, p4, p5, p6, p7, p8, p9, resultado])


    return(
        <main className='main'>

        <h1> Exercicio 13 - JOGO DA VELHA</h1>

        <div className='fundinho'>

        <div onClick={resul}>
            <img className='img' src={exibir(p1)} alt="" onClick={() => setP1(Velha(p1))}/>
                
            <img className='img'src={exibir(p2)} alt="" onClick={() => setP2(Velha(p2))}/>
                
            <img className='img' src={exibir(p3)} alt="" onClick={() => setP3(Velha(p3))}/>

        </div>

        <div>
            <img className='img' src={exibir(p4)} alt="" onClick={() => setP4(Velha(p4))}/>
                
            <img className='img' src={exibir(p5)} alt="" onClick={() => setP5(Velha(p5))}/>
                
            <img className='img' src={exibir(p6)} alt="" onClick={() => setP6(Velha(p6))}/>

        </div>

        <div>
            <img className='img' src={exibir(p7)} alt="" onClick={() => setP7(Velha(p7))}/>
                
            <img className='img' src={exibir(p8)} alt="" onClick={() => setP8(Velha(p8))}/>
                
            <img className='img' src={exibir(p9)} alt="" onClick={() => setP9(Velha(p9))}/>

        </div>

        <div> {vencedor} </div>
                
        </div>

        </main>
    )
}