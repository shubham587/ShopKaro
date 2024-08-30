import React from 'react'
// import "./style.scss"

const Card = ({data}) => {
  return (
    <>
      <div className="card-container border-red-600">
        <div className="card-image">
          <img className='h-full ' src={data.Image} alt={data.Name} />
        </div>
        <div className="card-desc">
          <h3>{data.Name+"adsf"}</h3>
          <p>{data.Description}</p>
          
        </div>
      </div>
    </>
  )
}

export default Card

