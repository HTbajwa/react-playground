import React, { useRef } from 'react'
const Input=React.forwardRef((props,ref)=>(
    <input type="text" ref={ref} {...props} />
))


const ForwardingRef = () => {
    const ref=React.useRef()
  return (
    <div>
        <Input type="text" ref={ref} />
      <button type="text" ref={ref} onClick={()=>ref.current.focus()}>REFFFFFF</button>
    </div>
  )
}

export default ForwardingRef
