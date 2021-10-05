import { Link } from 'react-router-dom'
import init from '../../Hooks'


const baseURL = 'https://mymoney-maia-default-rtdb.firebaseio.com/'


const {useGet} = init(baseURL)

const Meses = () =>{
    const data = useGet('meses')
    if(data.loading){
        return <span>Carregando...</span>
    }

    if(data.data){

    
    return(
    
                <table className='table'>
                    <thead>
                        <tr>
                        <th>Mês</th>
                        <th>Previsão Entrada</th>
                        <th>Entrada</th>
                        <th>Previsão Saída</th>
                        <th>Saída</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        Object.keys(data.data).map(mes =>{
                        console.log(mes)
                        return(
                            <tr key={mes}>
                                <td><Link to={`/movimentacoes/${mes}`}  style={{textDecoration : 'none'}}>{mes}</Link></td>
                                <td>{data.data[mes].previsao_entrada}</td>
                                <td>{data.data[mes].entradas}</td>
                                <td>{data.data[mes].previsao_saida}</td>
                                <td>{data.data[mes].saidas}</td>
                            </tr>
                        )
                        })
                    }
                    
                    </tbody>
                </table>
                )
    }
    return null
     
}

export default Meses