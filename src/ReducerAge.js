import { useReducer } from 'react';

export default function Counter(){
    const [state, dispatch] = useReducer(reducer, {age:42});

   function reducer(state, action){
        if(action.type === 'increment age'){
            return {
                age:state.age+1
            };
        }
    }

    return(<div>
        <button onClick={()=>dispatch({type:'increment age'})}>increment age</button>
        <p>Hello you age {state.age}</p>
    </div>)
}