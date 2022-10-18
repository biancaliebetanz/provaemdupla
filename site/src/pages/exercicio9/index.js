import { useState } from "react"
import './index.scss'



export default function Index(){
    const[inicio, setInicio] = useState(0);
    const[final, setFinal] = useState(0);
    const[resposta, setResposta]= useState(0);

    function ContarAte(){
        let array=[]
      for(let contador= inicio; contador<= final; contador++)
            array.push(contador)
            setResposta(array +'');
        
    }
  
    
    
    return(
        <main className="fundo9">
            <div className="box9">
            <h1>Contador</h1>
            <div>
            <label>Numero de início</label>
            <input type="number" value={inicio} onChange={e => Number(setInicio(e.target.value))}   />
            </div>
            <div>
            <label>Numero Final</label>
            <input type="number" value={final} onChange={e => Number(setFinal(e.target.value))}   />
            </div>
            <button onClick={ContarAte}> Contar </button>
            <p>{resposta}</p>
                    
            </div>
                     
        </main>
    )
}