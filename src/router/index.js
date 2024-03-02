import { createRouter, createWebHistory } from 'vue-router'
import LeftAndRight from "@/views/LeftAndRight.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: {type: '业务拓扑'},
      component: LeftAndRight
    },
  ]
})

export default router
