import { useState } from "react"

export default function Index(){
    
    const [litros, setLitros] = useState(0);
    const [estudantes, setEstudantes] = useState(0);
    const [mlEstudantes, setMlEstudantes] = useState(0.0);
    const [total, setTotal] = useState(0);

    function QueroCafe(){
        let x= (estudantes * mlEstudantes)/1000;
        let totalgarrafas = Math.ceil(x/litros);
        setTotal(totalgarrafas*litros)
    }


    return(
        <main>
    
            <div>
                
                <h1> Exercício Quero Café </h1>

                <div>
                    <label> Estudantes</label>
                    <input type="number" value={estudantes} onChange={e => setEstudantes(Number(e.target.value))} placeholder="0"/>
                </div>
                
                <div>
                    <label> Litros </label>
                    <input type="number" value={litros} onChange={e => setLitros(Number(e.target.value))} placeholder="0"/>
                </div>
                
                <div>
                    <label> Mililitros por Estudante </label>
                    <input type="number" value={mlEstudantes} onChange={e => setMlEstudantes(Number(e.target.value))} placeholder="0"/>
                </div>

                <button onClick={QueroCafe}> Calcular </button>

                <div>
                    O total de litros é : {total}
                </div>
                
            </div>

        </main>
    )
}