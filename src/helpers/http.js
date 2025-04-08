import axios from "axios"

const http = () => {
    let options = {
        baseURL: 'http://127.0.0.1:80/api',
        headers: {}
    }

    if (localStorage.getItem('token')) {
        options.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }

    return axios.create(options)
}

export default http
