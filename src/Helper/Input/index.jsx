import React from 'react'
import "./style.sass"
import classNames from 'classnames'

const Input = ({type="text", onChange, disabled=false, className= "",placeholder, value, ...props}) => {
  let inputClass = classNames("input border-2 border-gray-300 p-2", className)
  return (
    <>
        <input className={inputClass} disabled={disabled} type={type} value={value} onChange={onChange} placeholder={placeholder} {...props}/>
    </>
  )
}

export default Input
