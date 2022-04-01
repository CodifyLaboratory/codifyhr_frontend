import axios from "axios"

export const API_URL = "http://174.138.41.186/"

const API = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

let token = JSON.parse(localStorage.getItem("user"))

// const getToken = () => {
//     const token = JSON.parse(localStorage.getItem("user"));
//     return token;
// }
API.interceptors.request.use((config) => {
    config.headers.Authorization = 'token ' + token; 
    return config;
})
// const getToken = () => {
//     const token = JSON.parse(localStorage.getItem("user"))?.access;
//     return token;
// }

// API.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem("user")} `
// })

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getPartners: (data) => API.get("partners/", data),
    createUser: (data) => API.post("login/", data),
    getResumes: () => API.get("resumes/"),
    getResume: (id) => API.get("resumes/" + id),
    getUser: () => API.get("user/"),
    getWishlist: () => API.get("wishlist/"),
    getWishlist: () => API.get("wishlist/"),
    getCategories: () => API.get("categories/")
    
}
