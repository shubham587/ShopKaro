import React, { useEffect, useState } from 'react'
// import "./style.scss"
import FavouriteIcon from "../../assets/icons/FavouriteIcon"
import CartIcon from "../../assets/icons/CartIcon"
// import { useToast } from '../Toast/ToastContext'
import { toast } from 'react-toastify'
import { store } from '../../store'
import api from '../../service/api'
import { setUser, addItem, removeItem } from '../../store/userSlice'

const Card = ({ data, fillData }) => {
  // const favCart = store.getState().user["fav-cart"]
  const [fill, setFill] = useState(fillData)
  
  const favHandler = (id) => {
    console.log("card--->", id)
    if (fill) {
      try {
        const removeItemHandler = async (id) => {
          console.log("from card:",id)
          const res = await api.removeFavItem(id)
          console.log(res, "Remove res")
          if (res.status === 200) {
            toast.success("Item removed from favourite")
            store.dispatch(removeItem(id))
            setFill(!fill)
          }
        }
        removeItemHandler(id)
      } catch (err) {
        console.log(err)
        toast.error("Somthing went wrong...")
      }
    } else {
      try {
        const addItemHandler = async (id) => {
          console.log("from card:",id)
          const res = await api.addFavItem(id)
    
          if (res.status === 200) {
            console.log(id, "product id")
            store.dispatch(addItem(id))
            toast.success("Item added to favorite")
            setFill(!fill)
          }
        }
        addItemHandler(id)
      } catch (err) {
        console.log(err)
        toast.error("Somthing went wrong...")
      }
    }
  }


  const addCartHandler = () => {
    toast.success("Item added to Cart", {
      autoClose: 3000
    })
  }

  return (
    <>
      <div className="card-container m-2 h-2/3 text-center relative" >
        <div className="card-image m-2">
          <img className='h-full transition-transform duration-500 ease-in-out transform hover:scale-110' src={data.Image} alt={data.Name} />
        </div>
        <div className="fav-btn absolute top-2 right-1" onClick={() => favHandler(data["_id"]["$oid"])} >
          <FavouriteIcon fill={fill} color={"#FF9800"} />
        </div>
        <div className="card-desc w-full relative">
          <h3 className='truncate'>{data.Name}</h3>
          <p className="text-lg font-bold">&#8377;{data.Price}</p>
          <div className="btns">
            <button onClick={addCartHandler}
              className="btn btn-primary rounded-2xl p-2 w-full justify-evenly bg-yellow-100 text-black absolute flex align-middle gap-3 top-18">
              Add to cart
              <CartIcon color="#FFAB00" height={25} />
            </button>
          </div>
        </div>
      </div>


    </>
  )
}

export default Card

