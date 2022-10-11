import { useState } from "react"
import './index.scss'

export default function Index(){
    const[salario, setSalario]= useState(0);
    const[bonus, setBonus]= useState(0);
    const[desconto, setDesconto]= useState(0);
    const[resposta, setResposta]= useState(0);
    
    function Salario(){
        const a= (salario*bonus) /100;

        if(desconto == 0){
            const x = (salario+a)
            setResposta(x)
        }
        
        else{
            const x= (salario+a-desconto);
            setResposta(x)
        }
    }

    return(
        <main className="fundo4">
            <div className="box2">
                <div>
                    <label>Salario</label>
                    <input type='number' value={salario} onChange={e => setSalario(Number(e.target.value))}/>
                </div>
                <div>
                    <label>Bonus</label>
                    <input type='number' value={bonus} onChange={e => setBonus(Number(e.target.value))}/>
                </div>
                <div>
                    <label>Desconto</label>
                    <input type='number' value={desconto} onChange={e => setDesconto(Number(e.target.value))}/>
                </div>
                <button onClick={Salario}> calcular</button>
                <p>{resposta}</p>

            </div>
        </main>
    )
}