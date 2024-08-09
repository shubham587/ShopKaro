import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Component/HeaderComp'
import Footer from '../../Component/FooterComp'
const FavLayout = () => {
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

export default FavLayout