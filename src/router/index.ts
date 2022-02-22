import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Landing from '../views/Landing.vue';
import Contact from '../views/Contact.vue';
import Projects from "../views/Projects.vue";
import Users from '../views/Users.vue'
import E404 from '../views/E404.vue';
import Singup from '../components/Singup.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/singup',
    name: 'Singup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Singup" */ '../components/Singup.vue')
  },
  {
    path: '/userpage',
    name: 'Userpage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Userpage" */ '../components/UserPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: E404
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
