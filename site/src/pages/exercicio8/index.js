import { useEffect, useState } from "react"

export default function Index(){
const[inteiras, setInteiras] = useState(0);
const[meias, setMeias] = useState(0);


const[inteirasValor, setInteirasValor] = useState(0.0);
const[meiasValor, setMeiasValor] = useState(0.0);

const[nacional, setNacional] = useState(false);
const[quartaFeira, setQuartafeira] = useState(false);
const [resposta, setResposta] = useState(0.0)

function Cinema(){

    if(nacional == true ){
        setInteirasValor(inteiras * 5);
        setMeiasValor(meias * 5);
    }
    else if(quartaFeira == true){
        setInteirasValor(inteiras * 14.25);
        setMeiasValor(meias * 14.25);
    }
    else{
        setInteirasValor(inteiras * 28.50);
        setMeiasValor(meias * 14.25)
    }
    setResposta(inteirasValor + meiasValor);

}

useEffect( () => {
    setResposta(0);
    setInteirasValor(0)
    setMeiasValor(0)
}, [inteiras, meias])

    return(
        <main>

            <div>
                <label> Quantidade inteiras</label>
                <input type='number' value={inteiras} onChange={e => setInteiras(Number(e.target.value))}/>
            </div>
            <div>
                <label> Quantidade meias</label>
                <input type='number' value={meias} onChange={e => setMeias(Number(e.target.value))}/>
            </div>
            <div>
                <label> É nacional? </label>
                <input type='checkbox' value={nacional} onChange={e => setNacional(e.target.checked)}/>
            </div><div>
                <label> É Quarta-Feira? </label>
                <input type='checkbox' value={quartaFeira} onChange={e => setQuartafeira(e.target.checked)}/>
            </div>

            <button onClick={Cinema}> Calcular </button>

            <h2> O valor total dos ingressos é {resposta} </h2> 
            
        </main>
    )
}