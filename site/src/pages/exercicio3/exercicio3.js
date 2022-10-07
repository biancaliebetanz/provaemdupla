import { useState } from "react"

export default function Index(){
    const [gramas, setGramas] = useState(0);
    const [desconto, setDesconto] = useState(0.5);
    const [total, setTotal] = useState(0);
    const [mensagem, setMensagem] = '';

    function Sorveteria(){

        if( gramas > 1000){
            setTotal(gramas * 3);
        }
        else if (gramas == 0){
            setMensagem('Peso Inválido')
        }
        else {
            setTotal(gramas * 3.5);
        }
    }

    return(
        <main>

            <div>

            <h1> Calcular gramas</h1> 

            

            </div>

        </main>
    )
}