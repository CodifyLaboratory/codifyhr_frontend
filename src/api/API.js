import axios from "axios"

const API = axios.create({
    baseURL: "http://127.0.0.1:8000/"
})

const getToken = () => {
    const token = JSON.parse(localStorage.getItem("user"))?.access;
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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getPartners: (data) => API.get("main/", data),
    createUser: (data) => API.post("login/", data),
    getResumes: () => API.get("resumes/"),
    getResume: (id) => API.get("resumes/" + id),
}
