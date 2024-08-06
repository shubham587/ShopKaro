import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:5002"
})

const getProduct = (apiParam) => 
    instance({
        method: "GET",
        url: "/product",
        params: apiParam
    })

const getJWT = (formData) => 
    instance({
        method: "POST",
        url: "/login",
        params: formData
    })

const postUser = (userData) => 
    instance({
        method: "POST",
        url: "/signin",
        params: userData
    })

const api = {
    getProduct,
    getJWT,
    postUser,
}

export default api