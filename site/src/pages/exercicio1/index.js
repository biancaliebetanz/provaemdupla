import { useState } from "react"
import './index.scss'

export default function Index(){

    const [qtdPequeno, setQtdPequeno] = useState(0);
    const [qtdMedio, setQtdMedio] = useState(0);
    const [qtdGrande, setQtdGrande] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [total, setTotal] = useState(0);

    function calcularTotal(){
        const a = qtdPequeno * 13.5;
        const b = qtdMedio * 15;
        const c = qtdGrande * 17.5;

        if(desconto == 0){
        const x= (a+b+c);
        setTotal(x)
        }
        else if(desconto == 100){
        setTotal(0)
        }
        else {
        const x = ((a+b+c) * desconto)/100;
        setTotal(x)
        }
        
        
    }

    return(
        <main className="fundo">

            <div>

                <h1> Calcular o total da venda de açaí</h1>

                <div>
                    <label> QTD PEQUENO</label>
                    <input type='number' placeholder="0" value={qtdPequeno} onChange={e => setQtdPequeno(e.target.value)} />
                </div>

                <div>
                    <label> QTD MÉDIO</label>
                    <input type='number' placeholder="0" value={qtdMedio} onChange={e => setQtdMedio(e.target.value)} />
                </div>

                <div>
                    <label> QTD GRANDE</label>
                    <input type='number' placeholder="0" value={qtdGrande} onChange={e => setQtdGrande(e.target.value)} />
                </div>

                <div>
                    <label> PORCENTAGEM DESCONTO</label>
                    <input type='number' placeholder="0" value={desconto} onChange={e => setDesconto(e.target.value)} />
                </div>

                <button onClick={calcularTotal}> Calcular </button>

                <h3> O total é = {total} </h3>


            </div>

            

        </main>
    )
}