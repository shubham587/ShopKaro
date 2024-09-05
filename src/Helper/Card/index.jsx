import React, { useState } from 'react'
// import "./style.scss"
import FavouriteIcon from "../../assets/icons/FavouriteIcon"
import CartIcon from "../../assets/icons/CartIcon"
const Card = ({ data }) => {

  const [fill, setFill] = useState(false)

  const favHandler = () => {
    if (fill) {
      window.alert("Item is removed from fav cart")
      setFill(!fill)
    } else {
      window.alert("Item is added to fav cart")
      setFill(!fill)
    }
  }

  const addCartHandler = () => {
    window.alert("Item is added to cart")
  }

  return (
    <>
      <div className="card-container m-2 h-2/3 text-center relative">
        <div className="card-image m-2">
          <img className='h-full transition-transform duration-500 ease-in-out transform hover:scale-110' src={data.Image} alt={data.Name} />
        </div>
        <div className="fav-btn absolute top-2 right-1" onClick={favHandler}>
          <FavouriteIcon fill={fill} color={"#FF9800"} />
        </div>
        <div className="card-desc relative">
          <h3>{data.Name}</h3>
          <p>{data.Description}</p>
          <p className="text-lg font-bold">&#8377;{data.Price}</p>
          <div className="btns  ">
            <button onClick={addCartHandler} 
            className="btn btn-primary rounded-2xl p-2 w-full justify-evenly bg-slate-800 text-orange-500 absolute flex align-middle  gap-3 top-18">
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

