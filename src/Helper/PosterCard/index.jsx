import classNames from 'classnames'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const PosterCard = ({posterImg, posterName, posterPath, className}) => {
    let posterClass = classNames(className, "poster-card")
    let [loaded, setLoaded] = useState(false)
    const loaderHandler = () => {
      setLoaded(true)
    }
  return (
    
    <div className={posterClass}>
        <Link to={posterPath}>
            <img src={loaded? posterImg: "https://via.placeholder.com/300"} alt={posterName} onLoad={loaderHandler} />
        </Link>
    </div>
  )
}

export default PosterCard
