import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Home.vue'),
  },

  {
    path: '/keyboard',
    name: 'Keyboard',
    component: () => import('@/components/works/keyboard.vue'),
  },
  {
    path: '/knowledgegraph',
    name: 'KnowledgeGraph',
    component: () => import('@/components/works/knowledgeGraph.vue'),
  },
  {
    path: '/kghome',
    name: 'KGHome',
    component: () => import('@/components/works/knowledgeGraph/KGHome.vue'),
    children: [
      {
        path: 'kgofart',
        name: 'KGOfArt',
        component: () => import('@/components/works/knowledgeGraph/KGOfArt.vue'),
      },
      {
        path: 'kgofmath',
        name: 'KGOfMath',
        component: () => import('@/components/works/knowledgeGraph/KGOfMath.vue'),
      },
      {
        path: 'kgofit',
        name: 'KGOfIT',
        component: () => import('@/components/works/knowledgeGraph/KGOfIT.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
