import { createContext, useContext } from "react";

const ToastContext = createContext({
    showToast : (message) => {},
    closeToast: (id) => {},
})

export default ToastContext

export const useToast = () => useContext(ToastContext)