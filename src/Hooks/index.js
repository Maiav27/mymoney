
import axios from "axios";
import { useReducer, useEffect} from "react";


const reducer = (state, action) =>{
    console.log('state', state, 'action', action)
    if(action.type === 'REQUEST'){
      return {
        ...state,
        loading : true
      }
    }
     if(action.type === 'SUCCESS'){
       return {
         ...state, 
         loading : false, 
         data : action.data 
       }
     }
     
     
  
    return state
  }


  const init =  baseURL => {
    const useGet = resource => {
        const [data, dispatch] = useReducer(reducer, {
          loading : true,
          data : {}
        } )
          
          useEffect(()=>{
           dispatch({type : 'REQUEST'})
             axios.get(baseURL + resource + '.json')
             .then(res => {
               dispatch({type : 'SUCCESS', data : res.data})
               })
             
          },[resource])
        return data
      } 

      const usePost = (resource) =>{
        const [data, dispatch] = useReducer(reducer, {
            loading : true,
            data : {}
          } )
            
        const post = (data) => {
            dispatch({type : 'REQUEST'})
            axios.post(baseURL + resource + '.json' , data)
            .then(res => {
                dispatch({type : 'SUCCESS',
                      data : res.data})
                console.log(res.data)})
          }
          return [data, post]
    }

    const useDelete = () =>{
        const [data, dispatch] = useReducer(reducer, {
            loading : true,
            data : {}
          } )
            
        const remove = (resource) => {
            dispatch({type : 'REQUEST'})
            axios.delete(baseURL + resource + '.json')
            .then(() => {
                dispatch({type : 'SUCCESS',
                      })
                })
          }
          return [data, remove]
    }

    return{ useGet, usePost, useDelete}
  }

  export default init



