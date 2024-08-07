import React from 'react'
import Footer from '../../Component/FooterComp'
import { Outlet } from 'react-router-dom'
import Header from '../../Component/HeaderComp'

const AuthLayout = () => {
  return (
    <>
    <Header />
    <>
      <main className='h-screen' style={{height: "100px"}}>
        <Outlet />
      </main>
    </>
    {/* <Footer /> */}
    </>
  )
}

export default AuthLayout