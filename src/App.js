
//import { useEffect, useReducer } from 'react';
import init from './Hooks'


const baseURL = 'https://mymoney-maia-default-rtdb.firebaseio.com/'


const {useGet, usePost, useDelete} = init(baseURL)

function App() {
  const data = useGet('movimentcoes/2019-08')

  const [postData, post] = usePost('movimentcoes/2019-08')
  const [deleteData, remove] = useDelete()

  const saveNew = () => {
    post({valor : 10, descricao : 'olaá'})
  }

  const doRemove = () =>{
    remove('movimentcoes/2019-08/-MkO4-MW5GXL2GjKp4NS')
  }
  
  return (
    <div >
      <nav className="navbar navbar-light bg-light">
         <div className="container">
            <a  className="navbar-brand">MyMoney</a>
         </div>
      </nav>
    <select name="" id="">
        <option value="2019">2019</option>
        <option value="2020">2020</option>
    </select>
    <select name="" id="">
        <option value="">01</option>
        <option value="">02</option>
    </select>
      {JSON.stringify(data)}
      {JSON.stringify(postData)}
      {data.loading && <p>loading...</p>}
     <button onClick={saveNew}>Salvar</button>
     <button onClick={doRemove}>Remover</button>
     {JSON.stringify(deleteData)}
    </div>
  );
}

export default App;
