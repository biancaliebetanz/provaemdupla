import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export default function Index() {

    const [altura, setAltura] = useState(0);
    const [largura, setLargura] = useState(0);
    const [msg, setMsg] = useState('');
    const [retangulo, setRetangulo] = useState([]);

    function desenhar(){
        let x ='';
            for(let i=0; i<largura; i++){
                x = x + '*';
            }
        setMsg(x);
    }

    useEffect(() => {
        setMsg('');
        setRetangulo([])
    }, [altura, largura])

    return(
        <main>
            <div>
                <h1> Exercicio 11</h1>
                <h2> Desenhar retângulo </h2>

                <div>
                <label> Altura: </label>
                <input type='number' value={altura} onChange={e => setAltura(Number(e.target.value))} />
                </div> 
                <div>

                <label> Largura: </label>
                <input type='number' value={largura} onChange={e => setLargura(Number(e.target.value))} />
                </div> 

                <button onClick={desenhar}> Desenhar </button>

                <div> {msg} </div>
            </div>
        </main>
    )
}