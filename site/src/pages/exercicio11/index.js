import { useEffect, useState } from "react"
import './index.scss'

export default function Index() {

    const [altura, setAltura] = useState(0);
    const [largura, setLargura] = useState(0);
    const [msg, setMsg] = useState('');
    const [bolinhas, setBolinhas] = useState('');
    const [retangulo, setRetangulo] = useState([]);
    const [retanguloImagem, setRetanguloImagem] = useState([]);
    const [larguraImagem, setLarguraImagem] = useState([]);

    function desenhar(){
        let w = '';
        let x ='';
            for(let i=0; i<largura; i++){
                x = x + '*';
                w = w + 'O';
            }
        setMsg(x);
        setBolinhas(w);
        let y = [];
        for(let i=0; i<altura; i++){
            y = [...y, msg]
        }
        setRetangulo(y);
        alturaImagem()
    }

    function alturaImagem(){
        let x = [];
        for(let i=0; i<altura; i++){
            x = [...x, '*']
            console.log(x)
        }
        setRetanguloImagem(x);
        
        x= [];
        for(let i=0; i<largura; i++){
            x = [...x, '*']
            console.log(x)
        }
        setLarguraImagem(x)
    }

    
    useEffect(() => {
        setMsg('');
        setRetangulo([])
        setRetanguloImagem([])
        setLarguraImagem([])
    }, [altura, largura])

    return(
        <main className="ex11">
            <div>
                <h1> Exercicio 11</h1>
                <h2> Desenhar retângulo </h2>

                <div>
                <label> Altura: </label>
                <input type='number' value={altura} onChange={e => setAltura(Number(e.target.value))} />
                </div> 
                <div>

                <label> Largura: </label>
                <input type='number' value={largura} onChange={e => setLargura(Number(e.target.value))} />
                </div> 

                <button onClick={desenhar}> Desenhar </button>

                <div>
                    {retangulo.map(item => 
                        <p> {msg} </p> )}
                </div>

                <p> </p>

                <div>
                    {retangulo.map(item => 
                        <p> {bolinhas} </p> )}
                </div>

                <div> 
                    {retanguloImagem.map(item => 
                    <div> 
                    {larguraImagem.map(item => 
                        <img className="imagem" src="./images/naruto.jpg"/>
                    )}
                    </div>
                    )}
                </div>   

                <div>
                </div>
            </div>
        </main>
    )
}