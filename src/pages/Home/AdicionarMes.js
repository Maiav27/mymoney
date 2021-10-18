
import { useState, useRef } from "react"
import { Redirect } from "react-router"
const minAno = 2019
const maxAno = 2022

const AdicionarMes = () =>{
     const refAno = useRef()
     const refMes = useRef()
     const [redir, setRedir] = useState('')
    const anos = []
    const meses = []
     for(let i = minAno; i <= maxAno ; i ++){
         anos.push(i)
     }
     for(let i = 1; i <= 12; i++){
         if(i < 10){

             meses.push('0' + i)
         }else{
             meses.push(i)
         }
     }


     const verMes = () =>{
         setRedir(`${refAno.current.value}-${refMes.current.value} `  )

     }
     if(redir !== ''){
         return <Redirect to={`/movimentacoes/${redir}`} />
     }
   
    return(
        <>
            <select name="" id="" style={{marginRight : '10px'}} ref={refAno}>
                {anos.map(ano => <option key={ano}  value={ano}>{ano}</option>)}
                
                
            </select>
            <select  id="" style={{marginRight : '10px'}}  ref={refMes}>
                {meses.map(mes => <option key={mes} value={mes}>{mes}</option>)}
            </select>
            <button className='btn btn-success' onClick={verMes}>Adicionar mês</button>
        </>

    )
}

export default AdicionarMes