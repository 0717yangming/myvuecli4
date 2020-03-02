import axios from 'axios'
let baseURL = 'http://localhost:7170/'
let axiosConfig = {
    baseURL,
    timeout: 1000
}

let instanceTmp = axios.create(axiosConfig)

export default {
    getAxios: instanceTmp,
    getCancelToken: axios.CancelToken
}