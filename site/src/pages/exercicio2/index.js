import { useState } from "react";
import './index.scss'

export default function Index(){

    const[mes, setMes] = useState('');
    const[data, setData] = useState(0);
    const [libra, setLibra] = useState(false);
    
    function Signo(){
        
        if( data <0 || data > 31){
            alert('dia inváldio')
        }

        if( mes != 'Outubro' & mes != 'Setembro') {
            alert('mês inválido')
        }
        
        if(mes === 'Setembro' && data > 21 || mes === 'Outubro' && data < 22 ){
            setLibra(true)
        }
        else {
            setLibra(false);
        }

    }


return(
        <main className="fundo">

            <div>

                <h1> Seu signo é de libra?</h1>
                <h2> Se você tiver nascido entre "Outubro" ou "Setembro", digite o dia do seu nascimento e descubra!</h2>

                    <div>
                        <label> Mês: </label>
                        <input type='text' value={mes} onChange={e=> setMes(e.target.value)}/>
                    </div>
                    <div>
                        <label> Dia: </label> 
                        <input type='number' value={data} onChange={e=> setData(Number(e.target.value))}/>
                    </div>

                    <button onClick={Signo}>Verificar</button>

                    <h2> Seu signo {libra ? '' : 'não'} é Libra!</h2>
                    
            </div>

        </main>
    )
}