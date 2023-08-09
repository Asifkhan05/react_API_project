import React from 'react'


function Row({item}) {

  
  return (
    <tr>
        {Object.entries(item).map(([key,value])=>
           <td> {key} {JSON.stringify(value)} </td>
        )} 
        
    </tr>
  )
}

export default Row