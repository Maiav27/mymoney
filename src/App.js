
//import { useEffect, useReducer } from 'react';

import Header from './elements/Header';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home';
import Movimentacoes from './Movimentacoes';




function App() {
   

  return (
    <Router>
        <Header/> 
        <Route path='/'   exact component={Home}/>
        <Route path='/movimentacoes/:data' component={Movimentacoes} />
         
    </Router>
    

    
  );
}

export default App;
