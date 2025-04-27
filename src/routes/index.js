import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/layouts/HomeLayout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'',
        component:()=> import('@/view/HomeView/HomeView.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
