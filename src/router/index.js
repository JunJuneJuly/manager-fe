import { createRouter, createWebHashHistory} from 'vue-router'

const routes = [
  {
    name:'home',
    path:'/',
    component:() => import('../components/Home.vue'),
    redirect:'welcome',
    children:[
      {path:'welcome',component:()=>import('../components/Welcome.vue')},
      {path:'login',component:()=>import('../components/Login.vue')}
    ]

  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router