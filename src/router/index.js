import { createRouter, createWebHistory } from 'vue-router'
import profile from '../page/profile'
import discover from '../page/discover'
import friends from '../page/friends'

const routes = [
  {
    path: "/discover",
    component: discover
  },
  {
    path: '/friends',
    component: friends
  },
  {
    path: '/profile',
    component: profile
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
