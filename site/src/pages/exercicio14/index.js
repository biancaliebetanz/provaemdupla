import { useEffect, useState } from "react"

export default function Index(){
    
    const [alunos, setAlunos] = useState([]);
    const [qtd, setQtd] = useState(0);
    const [media, setMedia] = useState(0);
    const [maior, setMaior] = useState(0);
    const [menor, setMenor] = useState(0);

    function alunosArray() {
        let x = [];
            for(let i=0; i<qtd; i++){
                x = [...x,  i+1];
            }
        setAlunos(x);
        console.log(alunos)
    }

    function alterarAluno(nota, pos){
        alunos[pos] = nota;

        setAlunos([...alunos])
    }


    useEffect(() => {
        console.log(alunos)
    }, [alunos])

    return(
        <main>

            <div>
                <label> QTD: </label> <input type="number" placeholder="0" value={qtd} onChange={e => setQtd(Number(e.target.value))}/>
            </div>

            {alunos.map((item, pos) => 
                <div>
                    <label> Aluno {pos+1} </label> 
                    <input type="number"  value={item} onChange={e => alterarAluno(e.target.value, pos)}/>
                </div>
                )}

                <button onClick={alunosArray}> Calcular </button>

                <p> Média: {media} </p>
                <p> Maior: {maior} </p>
                <p> Menor: {menor} </p> 
    
        </main>
    )
}