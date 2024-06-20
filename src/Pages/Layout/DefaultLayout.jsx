import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Component/HeaderComp/index.jsx'
import Footer from '../../Component/FooterComp/index.jsx'

const DefaultLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default DefaultLayout