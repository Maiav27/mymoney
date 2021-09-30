
//import { useEffect, useReducer } from 'react';
import Header from './elements/Header';
import Meses from './Meses'




function App() {
 // const data = useGet('movimentcoes/2019-08')

 

 // const [postData, post] = usePost('movimentcoes/2019-08')
 // const [deleteData, remove] = useDelete()

 // const saveNew = () => {
 ///   post({valor : 10, descricao : 'olaá'})
 // }

 // const doRemove = () =>{
//remove('movimentcoes/2019-08/-MkO4-MW5GXL2GjKp4NS')
 //s }

  return (
    <div >
     <Header/>
    <div className="container">
          <select name="" id="">
              <option value="2019">2019</option>
              <option value="2020">2020</option>
          </select>
          <select name="" id="">
              <option value="01">01</option>
              <option value="02">02</option>
          </select>
          <button>Adicionar mês</button>
          <Meses/>
          
           
    </div>
    

    </div>
  );
}

export default App;
