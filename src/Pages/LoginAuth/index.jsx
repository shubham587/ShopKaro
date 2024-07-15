import React, { useState } from 'react'
import UserForm from '../../Component/UserForm'

const LoginAuth = () => {

  const [formData, setFormData] = useState({})
  const loginFields = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
      errorMessage: 'Name is required'
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      pattern: /\S+@\S+\.\S+/,
      errorMessage: 'Email is invalid'
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      required: true,
      pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{7,}$/,
      errorMessage: 'Password must be alphanumeric, include at least one special character, and be at least 7 characters long'
    }
  ];

  const submitHandler = (formData) => {
    console.log("formData", formData);
    setFormData(formData)
  }
  
  
  return (
    <>
      <div style={{ height: "90vh" }} className="login-container grid place-items-center bg-orange-400">
        <div className="login-section flex justify-evenly align-middle items-center bg-white  h-3/5 w-3/5 rounded-lg">
          <div className="login w-1/2">
           <UserForm fields={loginFields} formTitle={"LOGIN"} onSubmit={submitHandler}/>
          </div>
          <div className="logo">
            <h1>logo</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginAuth