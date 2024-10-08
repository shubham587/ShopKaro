import React, { useEffect, useState } from 'react'
import { json, useLoaderData } from 'react-router-dom'
import api from '../../service/api'
import { store } from '../../store/index.jsx'
import { useSelector } from 'react-redux'
import ProductGrid from '../../Helper/ProductGrid/index.jsx'

const FavSection = () => {
  const loaderData = useLoaderData()
  const [favProd, setFavProd] = useState(loaderData || [])
  const auth = useSelector(state => state.auth.isAuthenticated)
  const favList = useSelector((state) => state.user["fav-cart"])

  useEffect(() => {
    if (auth) {
      const getFavProduct = () => {
        setFavProd(favList)
        console.log("favProd-eff", favProd)
      }
      getFavProduct()
    }
  }, [favList, auth])
  console.log("loaderData", loaderData)

  if (!auth) {
    return (
      <div>Please log in...</div>
    )
  }

  return (
    <>
      <div className="container h-5/6 border-2  m-auto">
        <div>fav page</div>
        <ProductGrid data={favProd} />
      </div>
    </>
  )

}

export default FavSection

export const loader = async ({ params }) => {

  const auth = store.getState().auth.isAuthenticated
  const getFavProduct = async () => {
    const res = await api.getFavProduct()
    console.log("FavSection", res)
    return res
  }
  return getFavProduct()
  // return  null
}
