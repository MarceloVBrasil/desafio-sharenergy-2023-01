import axios from "axios"

const axiosInstanceServerURL = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: { "Content-Type": "application/json" }
})

const axiosInstanceDogsAPI = axios.create({
    baseURL: 'https://random.dog/',
    headers: { "Content-Type": "application/json" }
})

const axiosInstanceUserGeneratorAPI = axios.create({
    baseURL: 'https://randomuser.me/api/',
    headers: { "Content-Type": "application/json" }
})

export { axiosInstanceServerURL, axiosInstanceUserGeneratorAPI, axiosInstanceDogsAPI }