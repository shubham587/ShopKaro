import React from 'react'
import Header from '../../Component/HeaderComp'
import Footer from '../../Component/FooterComp'
import { Outlet } from 'react-router-dom'
const cartLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default cartLayout