import React from 'react'
import "./style.sass"

const Input = ({type, placeholder, value}) => {
  return (
    <>
        <input type={type} placeholder={placeholder} />
    </>
  )
}

export default Input
