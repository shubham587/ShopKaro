import React from 'react'
import "./style.sass"

const Input = ({type, placeholder, ...props}) => {
  return (
    <>
        <input style={{...props}} type={type} placeholder={placeholder} />
    </>
  )
}

export default Input
