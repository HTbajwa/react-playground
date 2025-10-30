//HOC functions that wraps components to give new features.

function withMessage(WrappedComponent){
    return function MyComponent(){
      return (
        <>
          <h1>Added by HOC</h1>
        <WrappedComponent />
        
        
        </>
      )
    }
}

function Hello(){
return <h1>Hello HOC</h1>
}

const Enhanced=withMessage(Hello)

export default function HoC(){
    return(
        <h1>
            <Enhanced />
        </h1>
    )
}