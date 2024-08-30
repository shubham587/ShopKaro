import React from 'react'
import { json } from 'react-router-dom'
import api from '../../service/api'
import { store } from '../../store/index.jsx'


const FavSection = () => {
  
  // const errbody = {
  //   "error": "Authentication Error",
  //   "message": ["You are not authenticated to view this page", "Please log in"],
  //   "status": 401
  // }

  // let err = new Error(errbody.error)
  // err.body = errbody
  // throw err



  return (
    <div>fav</div>
  )

}

export default FavSection

export const loader = async ({ params }) => {
    const state = store.getState()
    console.log(state)
    const fetchFavData = async () => {
      const res = await api.getFavData({email: state.auth.email, username: state.auth.userName})
    }
    return null
}
