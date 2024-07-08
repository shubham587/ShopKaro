import React from 'react'
import { json, useLoaderData } from 'react-router-dom'
import ProductGrid from '../../Helper/ProductGrid'
const MenClothingPage = () => {
    let loaderData = useLoaderData() 
    console.log("loaderData", loaderData);
  return (
    <div className="container h-5/6 border-2  m-auto">
        <div>WomenClothingPage</div>
        <ProductGrid data={loaderData.msg}/>
      </div>
  )
}

export default MenClothingPage

export const loader = async({request, params}) => {
    let url = new URL(request.url).searchParams.get('category')
    let apiURL = ""
    if (url != null) {
        apiURL =`http://127.0.0.1:5002/product?gender=male&category=${url}`
    }else{
        apiURL = `http://127.0.0.1:5002/product?gender=male`
    }
    const res = await fetch(apiURL, {method: "GET"})
    const data = await res.json()
    return json(data);
}