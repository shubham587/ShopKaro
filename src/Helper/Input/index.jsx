import React from 'react'
import "./style.sass"

const Input = ({type="text", onChange, disabled=false, className= "",placeholder, value, ...props}) => {
  return (
    <>
        <input className={`input ${className}`} disabled={disabled} type={type} value={value} onChange={onChange} placeholder={placeholder} {...props}/>
    </>
  )
}

export default Input
