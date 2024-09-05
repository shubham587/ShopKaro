import axios from "axios";
import { useSelector } from "react-redux";

const token = localStorage.getItem("token") || null
console.log(token, "in api")
const instance = axios.create({
    baseURL: "http://127.0.0.1:5002"
})



const getProduct = (apiParam) =>
    instance({
        method: "GET",
        // headers: {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`
        // },
        url: "/product",
        params: apiParam
    })

const getJWT = (formData) =>
    instance({
        method: "POST",
        url: "/login",
        params: formData
    }).then((res) => {
        return res
    }
    ).catch((err) => {
        console.log(err, "in api")
        return err
    })

const postUser = (userData) =>
    instance({
        method: "POST",
        url: "/signin",
        params: userData
    }).then((res) => {
        return res
    }).catch((err) => {
        return err
    })

const logoutUser = () =>
    instance({
        method: "POST",
        url: "/logout",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }).then((res) => 
    {
        return res
    }).catch((err) => {
        return err
    })

const getUserName = (data) =>
    instance({
        method: "get",
        url: "/get_username",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            // "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",

        },
        params: data
    }).then((res) => {
        return res
    }).catch((err) => {
        return err
    })

const getFavData = (data) => 
    instance({
        method: "GET",
        url: "/get_fav",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        },
        params: data
    }).then((res) => {
        console.log(res.json())
        return res
    }).catch((err) => {
        console.log(err)
        return err
    })

const api = {
    getProduct,
    getJWT,
    postUser,
    logoutUser,
    getUserName,
    getFavData
}

export default api