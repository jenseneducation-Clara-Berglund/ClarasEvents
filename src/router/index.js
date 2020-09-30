import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Profile from "../views/Profile.vue"
import JoinEvent from "../views/JoinEvent.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/Profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/JoinEvent/:id",
    name: "JoinEvent",
    component: JoinEvent
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
