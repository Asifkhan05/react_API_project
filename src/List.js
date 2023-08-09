import React from 'react'
import TrueList from './TrueList'
function List({items}) {
  return (
   <ul>
    {items.map((item)=>(
       <TrueList key={item.id} item={item}/> 
    ))}
   </ul>
  )
}

export default List