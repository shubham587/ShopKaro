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


const api = {
    getProduct,
}

export default api