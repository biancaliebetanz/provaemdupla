import { useState } from "react"
import './index.scss';
export default function Index(){
        const[capacidade, setCapacidade] = useState(0.0);
        const[consumo, setConsumo] = useState(0.0);
        const[distancia, setDistancia] = useState(0.0);
        const[resposta, setResposta] = useState(1);

        function Parada(){
                try {
        
                    const a= distancia/(capacidade*consumo);
                    setResposta(Math.ceil(a));

                    if(resposta){
                        setResposta(1);
                    }


                } catch (err) {
                    alert('erro')
                }
        }
            
        
    return(
        
        <main className="fundo5">
           <div className="box">
                <div>
                    <label>Capacidade</label>
                    <input type='number' value={capacidade} onChange={e => setCapacidade(Number(e.target.value))}/>
                </div>
                <div>
                    <label>Consumo</label>
                    <input type='number' value={consumo} onChange={e => setConsumo(Number(e.target.value))}/>
                </div>
                <div>
                    <label>Distância</label>
                    <input type='number' value={distancia} onChange={e => setDistancia(Number(e.target.value))}/>
                </div>            
                
                <button onClick={Parada}> calcular</button>
                <p> Você precisará fazer {resposta} paradas para abastecer</p>
           </div>

        </main>
    )
}