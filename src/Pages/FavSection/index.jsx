import React from 'react'
import { json } from 'react-router-dom'

const FavSection = () => {
    throw new Error("you  must logged in")
  return (
    <div>fav</div>
  )

}

export default FavSection

export const loader = async({params}) => {
    const err = "err"
    return null
}
