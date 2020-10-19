import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import VideoPage from '../views/VideoPage.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/video/:videoId',
    props: true,
    name: 'VideoPage',
    component: VideoPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
