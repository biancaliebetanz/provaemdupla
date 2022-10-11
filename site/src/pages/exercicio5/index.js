import { useState } from "react"

export default function Index(){
        const[capacidade, setCapacidade] = useState(0);
        const[consumo, setConsumo] = useState(0);
        const[distancia, setDistancia] = useState(0);
        const[resposta, setResposta] = useState(0);

        function Parada(){
            const a= distancia/(capacidade*consumo);

            //bia vamos ter que usar mathAround()
        }
            
        
    return(
        
        <main>

        </main>
    )
}