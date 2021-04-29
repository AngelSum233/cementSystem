import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Workhome from '../views/Workhome.vue'
import CementingDataShow from '../views/CementingDataShow.vue'
import CementingDataMange from '../views/CementingDataMange.vue'
import Statistics from '../views/Statistics.vue'
import System from '../views/System.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    redirect: '/workhome',
    children: [
      { path: '/workhome', component: Workhome },
      { path: '/cementingdatashow', component: CementingDataShow },
      { path: '/cementingdatamange', component: CementingDataMange },
      { path: '/statistics', component: Statistics },
      { path: '/system', component: System }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
