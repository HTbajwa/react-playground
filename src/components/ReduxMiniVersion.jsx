import React, {  useContext } from 'react'
import { globalContext } from './CounterProvider'



const ReduxMiniVersion = () => {
   const {state,dispatch}= useContext(globalContext)
  return (
    
        <div className='p-3 '>
      <h1>Redux Mini VERSION (CONTEXT + REDUCER)</h1>
      <h2>{state}</h2>
      <button className='btn btn-primary' onClick={(e)=>dispatch({type:"increment"})}>Increment Globally</button>
      <button className='btn btn-primary' onClick={(e)=>dispatch({type:"decrement"})}>Decrement Globally</button>
   
    </div>
    
  )
}

export default ReduxMiniVersion
