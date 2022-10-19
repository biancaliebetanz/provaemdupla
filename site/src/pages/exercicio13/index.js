import { useEffect, useState } from 'react'
import './index.scss'

export default function Index(){

    const [p1, setP1] = useState(false);
    const [p2, setP2] = useState(false);
    const [p3, setP3] = useState(false);
    const [p4, setP4] = useState(false);
    const [p5, setP5] = useState(false);
    const [p6, setP6] = useState(false);
    const [p7, setP7] = useState(false);
    const [p8, setP8] = useState(false);
    const [p9, setP9] = useState(false);

    const [p1img, setP1Img] = useState('./images/click.webp');
    const [p2img, setP2Img] = useState('./images/click.webp');
    const [p3img, setP3Img] = useState('./images/click.webp');
    const [p4img, setP4Img] = useState('./images/click.webp');
    const [p5img, setP5Img] = useState('./images/click.webp');
    const [p6Img, setP6Img] = useState('./images/click.webp');
    const [p7img, setP7Img] = useState('./images/click.webp');
    const [p8img, setP8Img] = useState('./images/click.webp');
    const [p9img, setP9Img] = useState('./images/click.webp');
    
    const [resultado, setResultado] = useState('');

    function Velha(){


    }

    function exibir(pos){
        if(pos == true)
        return './images/xis.webp'
        else
        return './images/bolinha/webp'
    }

    function jogo(){
        if(p1 == true && p2 == true && p3 == true)
    {}
    }

    useEffect(() => {

    }, [p1, p2, p3, p4, p5, p6, p7, p8, p9])


    return(
        <main className='main'>

        <h1> Exercicio 13 - JOGO DA VELHA</h1>

        <div className='fundinho'>

        <div>
            <img className='img' src={p1img} alt="" onClick={Velha}/>
                
            <img className='img'src={p2img} alt="" onClick={Velha}/>
                
            <img className='img' src={p3img} alt="" onClick={Velha}/>

        </div>

        <div>
            <img className='img' src={p4img} alt="" onClick={Velha}/>
                
            <img className='img' src={p5img} alt="" onClick={Velha}/>
                
            <img className='img' src={p6Img} alt="" onClick={Velha}/>

        </div>

        <div>
            <img className='img' src={p7img} alt="" onClick={Velha}/>
                
            <img className='img' src={p8img} alt="" onClick={Velha}/>
                
            <img className='img' src={p9img} alt="" onClick={Velha}/>

        </div>
                
        </div>

        </main>
    )
}