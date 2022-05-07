import axios from "axios";

// export const API_URL = "http://174.138.41.186/";
export const API_URL = "http://127.0.0.1:8000/";

const API = axios.create({
    withCredentials: "include",
    baseURL: API_URL
});


const getToken = () => {
    const token = JSON.parse(localStorage.getItem("user"));
    return token;
};

API.interceptors.request.use((config) => {
    if(getToken()){
        config.headers = {
            "Authorization": "Bearer " + getToken()
        }
    }
    return config
});


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getPartners: (data) => API.get("partners/", data),
    createUser: (data) => API.post("login/", data),
    getResumes: () => API.get("resumes/"),
    getResume: (id) => API.get("resumes/" + id),
    getUser: () => API.get("user/"),
    getWishlist: () => API.get("wishlist/"),
    createWishlist: (id, data) => API.post("wishlist/create/" + id + "/", data),
    deleteWishlist: (id) => API.delete("wishlist/delete/" + id + "/"),
    getCategories: () => API.get("categories/")
};
