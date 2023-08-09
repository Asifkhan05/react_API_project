import React from 'react'
import Button from './Button'

function Form({load,reLoad}) {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
    <Button
    buttonText={"users"}
    load={load}
    reLoad={reLoad} />
     <Button
    buttonText={"posts"}
    load={load}
    reLoad={reLoad} />
     <Button
    buttonText={"comments"}
    load={load}
    reLoad={reLoad} />
    
    
    </form>
  )
}

export default Form