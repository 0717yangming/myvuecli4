import axios from 'axios'

export function request(config){
   let axiosInstance = axios.create({
        baseURL: 'http://localhost:7170/',
        timeout: 50000
    })
   return axiosInstance(config)
}