import React from 'react'
import { json, useLoaderData } from 'react-router-dom'

const KidsClothingPage = () => {
    let loaderData = useLoaderData() 
    console.log("loaderData", loaderData);
  return (
    <div>KidsClothingPage</div>
  )
}

export default KidsClothingPage

export const loader = async({request, params}) => {
    let url = new URL(request.url).searchParams.get('category')
    let apiURL = ""
    if (url != null) {
        apiURL =`http://127.0.0.1:5001/product?gender=kids&category=${url}`
    }else{
        apiURL = `http://127.0.0.1:5001/product?gender=kids`
    }
    const res = await fetch(apiURL, {method: "GET"})
    const data = await res.json()
    return json(data);
}