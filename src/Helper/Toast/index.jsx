import React, { Children, useMemo, useState } from 'react'
import Button from '../Button'
import ToastContext from './ToastContext'
const ToastComp = ({ message, close }) => {
    return (
        <div className="toast-container">
            <div className="toast">
                <p>{message}</p>
            </div>
            <div className="toast-btn">
                <Button onClick={close} />
            </div>
        </div>
    )
}

export default ToastComp

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState([])

    const closeToast = (id) => {
        setToast(prevToast => prevToast.filter((ele) => ele.id != id))
    }

    const showToast = (message) => {
        const id = new Date()
        setToast(prevToast => [...prevToast, {
            id: id,
            message: message,
        }])
    }

    const contextVal = useMemo(() => {
        showToast,
        closeToast
    }, [])

    return (
        <ToastContext.Provider value={{showToast, closeToast}}>
            {children}
            {
                toast && toast.map((ele, ind) => (
                    <ToastComp key={ind} message={ele.message} close={closeToast} />
                ))
            }
        </ToastContext.Provider>
    )
}