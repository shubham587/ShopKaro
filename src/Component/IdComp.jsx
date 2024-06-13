import React from 'react'
import { useLoaderData } from 'react-router-dom'

const IdComp = () => {

    let data = useLoaderData()
    
  return (
    <div>
        <h1>the data is {data}</h1>
    </div>
  )
}

export default IdComp
