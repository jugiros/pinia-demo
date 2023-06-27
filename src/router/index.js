import { createRouter, createWebHistory } from 'vue-router'

const loadComponent = (view) => {
  return () => import(`../views/${view}.vue`);
}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadComponent("HomeView")
  },
  {
    path: '/counter',
    name: 'Counter',
    component: loadComponent('CounterView')
  },
  {
    path: '/:catchAll(.*)',
    name: 'error404',
    component: loadComponent('Error404')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
