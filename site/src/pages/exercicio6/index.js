import { useState } from "react"

export default function Index(){

    const[temperatura, setTemperatura] = useState(0);
    const[situacao, setSituacao] = useState('');


    function Febre(){
        if(temperatura >= 41){
            setSituacao('Hipertemia');
        }
        else if (temperatura >= 39.6 && temperatura < 41) {
            setSituacao('Febre Alta');
        } 
        else if (temperatura >= 37.6 && temperatura < 39.6) {
            setSituacao('Febre');
        } 
        else if (temperatura >= 36.0 && temperatura < 37.6) {
            setSituacao('Normal');
        } 
        else{
            setSituacao('Hiportemia');
        }


    }
    return(
        <main>
            <label>Temperatura</label>
            <input type='number' value={temperatura} onChange={e => setTemperatura(Number(e.target.value))}/>
            <button onClick={Febre}> calcular</button>
            <p> A situação para sua temperatura é {situacao}</p>
        </main>
    )
}