import React, { Children, createContext, useContext, useReducer } from 'react'
export const globalContext=createContext()
const reducer=(state,action)=>{
switch (action.type) {
    case "increment":
        return state+1;
        break;
         case "decrement":
        return state-1;
        break;
    default:
        break;
}
}


const CounterProvider=({children})=>{ 
    const [state, dispatch] = useReducer(reducer, 0)
    return(
<globalContext.Provider value={{state,dispatch}}>
    {children}
</globalContext.Provider>
    )
}
export default CounterProvider;