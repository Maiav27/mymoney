import init from '../Hooks'
import { useState } from 'react'

const baseURL = 'https://mymoney-maia-default-rtdb.firebaseio.com/movimentcoes/'

const {useGet, usePost} = init(baseURL)




const Movimentacoes= ({match}) => {
    const data = useGet(match.params.data)
    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState(0)

    const  [postData, post] = usePost(match.params.data)


    const onChange = tipo => evt =>{
        tipo === 'descricao' ? setDescricao(evt.target.value) : setValor(evt.target.value)
    }

    const salvarMovimentacao = () =>{
        post({
             descricao : descricao , 
            valor : valor
        })

        console.log(descricao, valor)
    }
        
    
    return(
        <div className='container'>
           <h1>Movimentações</h1>
           <table className='table'>
              <thead>
                <tr>
                <th>Descrição</th>
                <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {
                    Object.keys(data.data).map(movimentacao =>{
                        return(
                            <tr>
                              <td>{data.data[movimentacao].descricao}</td>
                              <td>{data.data[movimentacao].valor} </td>
                            </tr>
                        )
                    }
                        )
                }
                <tr>
                    <td><input type="text" value={descricao} onChange={onChange('descricao')} /></td>
                    <td>
                        <input type="text" value={valor} onChange={onChange('valor')} />
                        <button onClick={salvarMovimentacao}>+</button>
                    </td>
                </tr>
              </tbody>
              
           </table>
           {JSON.stringify(data.data)}
        </div>
    )
}
export default Movimentacoes