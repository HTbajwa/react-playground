import React, { createContext, useContext } from 'react'
import { useState } from 'react'
 const themecontext=createContext()
const Theme = () => {
   
    const [dark, setdark] = useState(false)
    const toggleTheme=()=>setdark(!dark)
  return (
   <themecontext.Provider value={dark}>
    <button onClick={toggleTheme}>Toggle theme</button>
     {/* {
          dark ? <h1>dark theme</h1> : <h1>Light theme</h1>
     } */}
     <Access />
   </themecontext.Provider>
  )
}
const Access=()=>{
    const dark=useContext(themecontext)
    return(
        <div>
          {
          dark ? <h1>dark theme</h1> : <h1>Light theme</h1>
     }
        </div>
    )
}
export default Theme
