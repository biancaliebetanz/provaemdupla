import { useState } from "react"

export default function Index(){
    
    const [gramas, setGramas] = useState(0.0);
    const [total, setTotal] = useState(0.0);
    const [mensagem, setMensagem] = useState(" ");

    function Sorveteria(){

         if (gramas >= 1000 ){
            setTotal((gramas/100) * 3);
            setMensagem('')
        }
        else if (gramas == 0) {
            setMensagem("Peso inválido")
            setTotal(0);
        }
        else { 
            setTotal((gramas/100) * 3.5);
            setMensagem('')
        }
    }

    return(
        <main>

            <div>

            <h1> Calcular gramas</h1> 

            <div>
                <label> Gramas </label>
                <input type='number' value={gramas} onChange={e=> setGramas(Number(e.target.value))}/>
                <p></p>
                <span> {mensagem} </span>
            </div>

            <button onClick={Sorveteria}> Calcular </button>

            <h2> O total é {total} </h2>


            </div>

        </main>
    )
}