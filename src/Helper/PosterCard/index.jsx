import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

const PosterCard = ({posterImg, posterName, posterPath, className}) => {
    let posterClass = classNames(className, "poster-card")
  return (
    
    <div className={posterClass}>
        <Link to={posterPath}>
            <img src={posterImg} alt={posterName} />
        </Link>
    </div>
  )
}

export default PosterCard
