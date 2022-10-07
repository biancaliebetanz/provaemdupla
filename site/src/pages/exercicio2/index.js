import { useState } from "react";

export default function Index(){

    const[mes, setMes] = useState('');
    const[data, setData] = useState(0);
    
    function Signo(){
      
    if(mes === 'Dezembro' && data > 21 || mes === 'Janeiro' && data < 22 ){
            return 'Capricornio';
    }
     else   if(mes === 'Janeiro' && data > 21 || mes === 'Fevereiro' && data < 22 ){
            return 'Aquário';
    }
   else if(mes === 'Fevereiro' && data > 21 || mes === 'Março' && data < 22 ){
        return 'Peixes';
    }
   else if(mes === 'Março' && data > 21 || mes === 'Abril' && data < 22 ){
        return 'Áries';
    }
   else if(mes === 'Abril' && data > 21 || mes === 'Maio' && data < 22 ){
        return 'Touro';
    }
   else if(mes === 'Maio' && data > 21 || mes === 'Junho' && data < 22 ){
        return 'Gêmeos';
    }
  else  if(mes === 'Junho' && data > 21 || mes === 'Julho' && data < 22 ){
        return 'Cancêr';
    }
    else    if(mes === 'Julho' && data > 21 || mes === 'Agosto' && data < 22 ){
        return 'Leão';
    }
    else    if(mes === 'Agosto' && data > 21 || mes === 'Setembro' && data < 22 ){
        return 'Virgem';
    
    }else    if(mes === 'Setembro' && data > 21 || mes === 'Outubro' && data < 22 ){
        return 'Libra';
    }
    else    if(mes === 'Outubro' && data > 21 || mes === 'Novembro' && data < 22 ){
        return 'Escorpião';
        
    }
    else    if(mes === 'Novembro' && data > 21 || mes === 'Dezembro' && data < 22 ){
        return 'Sagitário';
    }
    else{
        throw new Error('Não existe')
    }

    }


return(
        <main>
            <input type='text' value={mes} onChange={e=> setMes(e.target.value)}/>
            <input type='number' value={data} onChange={e=> setData(Number(e.target.value))}/>
            <button onClick={Signo}>Verificar</button>
        </main>
    )
}