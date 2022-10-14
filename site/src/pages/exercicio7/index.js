import { useEffect, useState } from "react"

export default function Index(){

const[ganhos, setGanhos] = useState(0);
const[gastos, setGastos] = useState(0);
const[resposta, setResposta] = useState('Resultado');

function OrcamentoFamiliar(){

    let porcentagem = (gastos*100)/ganhos;
   
    if(gastos > ganhos){
        setResposta('Orçamento comprometido! Hora de rever seus gastos!')
    }
    else if(porcentagem >=0 && porcentagem <=20){
        setResposta('Parabéns, está gerenciando bem seu orçamento!')
    }
    else if(porcentagem >=21 && porcentagem <=50){
        setResposta('Muito bem, seus gastos não ultrapassam metade dos ganhos!')
    }
    else if(porcentagem >=51 && porcentagem <=80){
        setResposta('Atenção, melhor conter os gastos!')
    }
    else if(porcentagem >= 81 && porcentagem <=100){
        setResposta('Cuidado, seu orçamento pode ficar comprometido!')
    }
    else {
        setResposta('Cheque os valores')
    }
}

useEffect( () => {
    setResposta('')
}, [gastos, ganhos])

    return(
        <main>
            <h1> Cheque seu orçamento</h1>

            <div>
                <label>Ganhos</label>
                <input type='number' value={ganhos} onChange={e => setGanhos(Number(e.target.value))}/>
            </div>
            <div>
                <label>Gastos</label>
                <input type='number' value={gastos} onChange={e => setGastos(Number(e.target.value))}/>
            </div>

            <button onClick={OrcamentoFamiliar}> Checar </button>

            <div>
                {resposta}
            </div>
        </main>
    )
}