import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from 'comp/home/home'
import Login from 'comp/login/login'
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/index",
        component: Home
    },
    {
        path: "/login",
        component: Login 
    }
]
const router = new VueRouter({
    routes,
    mode:'history'
})
export default router