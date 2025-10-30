//ITs when you send fucction as a prop then the other one decides what to show
function DataProvider({render}){
    const data="This the render component"
    return render(data);
}
import React from 'react'

const RenderProps = () => {
  return (
    <DataProvider render={(info)=><h1>{info}</h1>}
    
    />
  )
}

export default RenderProps
