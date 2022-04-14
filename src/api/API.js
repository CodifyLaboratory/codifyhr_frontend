import axios from "axios"

export const API_URL = "http://174.138.41.186/"
// export const API_URL = "http://127.0.0.1:8000/"

const API = axios.create({
    withCredentials: "include",
    baseURL: API_URL
})


// const getToken = () => {
//     const token = JSON.parse(localStorage.getItem("user"));
//     return token;
// }

const getToken = () => {
    const token = JSON.parse(localStorage.getItem("user"));
    return token;
}

API.interceptors.request.use((config) => {
    if(getToken()){
        config.headers = {
            "Authorization": "Bearer " + getToken()
        }
    }
    return config
})

// API.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem("user")} `
// })

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getPartners: (data) => API.get("partners/", data),
    createUser: (data) => API.post("login/", data),
    createRefreshToken: (data) => API.post("refresh/", data),
    getResumes: () => API.get("resumes/"),
    getResume: (id) => API.get("resumes/" + id),
    getUser: () => API.get("user/"),
    getWishlist: () => API.get("wishlist/"),
    createWishlist: (data, id) => API.post("wishlist/create/" + id, data),
    getCategories: () => API.get("categories/")
}
