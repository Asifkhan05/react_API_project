import React from 'react'

function TrueList({item}) {
  return (
    <li>{JSON.stringify(item)}</li>
  )
}

export default TrueList