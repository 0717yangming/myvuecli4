import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
state: {
    baseUrl: "http://localhost:7170/",
    token: '12'
}
})
export default store