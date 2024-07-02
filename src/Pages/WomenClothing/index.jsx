import React from 'react'
import { json, useLoaderData } from 'react-router-dom'

const WomenClothingPage = () => {
    let loaderData = useLoaderData() 
    console.log("loaderData", loaderData);
  return (
    <div>WomenClothingPage</div>
  )
}

export default WomenClothingPage

export const loader = async({request, params}) => {
    let url = new URL(request.url).searchParams.get('category')
    let apiURL = ""
    if (url != null) {
        apiURL =`http://127.0.0.1:5001/product?gender=women&category=${url}`
    }else{
        apiURL = `http://127.0.0.1:5001/product?gender=women`
    }
    const res = await fetch(apiURL, {method: "GET"})
    const data = await res.json()
    return json(data);
}