import React from 'react'
import Form from './Form'
import List from './List'
import { useState,useEffect } from 'react'
import Table from './Table'

function App() {
const API_URL = "https://jsonplaceholder.typicode.com/"
let [items,reItems]=useState([])
let [load,reLoad] =useState("users")
useEffect(()=>{
    let fetchApp =async ()=>{
        try{
    let responce = await fetch(`${API_URL}${load}`)
    let update = await responce.json()
    reItems(update)
        }catch(err){
            console.log(err);
        }
    }
    fetchApp()
},[load])
  return (
    <div className='App'>
    <Form 
    load = {load} reLoad={reLoad}    /> 

    {/* <List items={items} /> */}
    <Table items={items}/>
    </div> 
  )
}

export default App