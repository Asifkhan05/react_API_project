import React from 'react'

function Button({load,buttonText,reLoad}) {
  return (
    <button className={buttonText === load ?"selected":null}
    onClick={()=>reLoad(buttonText)}>
    {buttonText}
    </button>
  )
}

export default Button