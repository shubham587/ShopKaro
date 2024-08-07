import React from 'react'

const Card = ({data}) => {
  return (
    <>
      <div className="card-container">
        <div className="card-image">
          <img className='h-full ' src={data.Image} alt={data.Name} />
        </div>
        <div className="card-desc">
          <h3>{data.Name}</h3>
          <p>{data.Description}</p>
          
        </div>
      </div>
    </>
  )
}

export default Card

