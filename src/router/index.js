import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../components/pages/Top.vue'
import About from '../components/pages/About.vue'
import Skills from '../components/pages/Skills.vue'
import Projects from '../components/pages/Projects.vue'
import Works from '../components/pages/Works.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
