import { useEffect, useState } from "react"

export default function Index(){

    const [tamanho, setTamanho] = useState(0);
    const [resposta, setResposta] = useState([]);
    const [msg, setMsg] = useState("");

    function criarLinha(){
        let x ='';
            for(let i=0; i<tamanho; i++){
                x = x + '*';
            }
        setMsg(x);
    }

    useEffect(() =>{
    setResposta([])
    setMsg('')
    }, [tamanho])

    return(
        <main>
            <div>
            <h1> Desenhar linha</h1>

            <div>
                <label> Tamanho da linha: </label>
                <input placeholder="0" value={tamanho} onChange={e => setTamanho(Number(e.target.value))} type="number"/>
            </div>

            <button onClick={criarLinha}> Criar linha </button>

            {msg}

            </div>
        </main>
    )
}