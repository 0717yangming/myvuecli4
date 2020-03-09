import axios from 'axios'

export function request(config){
   let axiosInstance = axios.create({
         baseURL:this.$store.state.baseURL,
        timeout: 50000
    })
   return axiosInstance(config)
}