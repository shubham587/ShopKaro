import React from 'react'
import AlertIcon from '../../assets/icons/Alert'
import { useNavigate, useRouteError } from 'react-router-dom'
import Button from '../../Helper/Button'

const AuthErrComp = ({ errImg, errText, children, button, buttonText }) => {

  const error = useRouteError()
  console.log(error, error.body)
  const navigate = useNavigate()

  // const errorText = error.message.split("/")
  console.log("errText", errText)

  const errBtnHanlder = () => {
    navigate("/auth/login")
  }

  return (
    <div className="err my-44 w-max m-auto bg-amber-700 text-white rounded-xl">

      <div className="err-container  h-auto w-auto  m-auto  p-24">
        <div className="err-section flex flex-row border border-black ">
          <div className="err-img  px-16 m-auto">
            <AlertIcon width={60} height={60}/>
          </div>
          <div className="err-text text-red-100 p-4 flex-grow flex flex-col">
            <span>
              {error.body.error}
            </span>
            <span >
              {error.body.status}
            </span>
            <span>
              <ul>
                {error.body.message.map((ele, ind) => (
                  <li key={ind}>--{ele}</li>
                ))}
              </ul>
            </span>
          </div>
        </div>
        <div className="button m-4">
          {button && <Button className='bg-black text-yellow-50 float-right rounded-md' onClick={errBtnHanlder}>{buttonText}</Button>}
        </div>
      </div>
    </div>
  )
}

export default AuthErrComp