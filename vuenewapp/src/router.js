import Vue from 'vue'
import Router from 'vue-router'
import Skills from './components/Skills.vue'
import About from './components/About.vue'
import LoginComponent from './components/LoginComponent'
import uploadMedia from './components/uploadMedia'
import newLogin from './components/newLogin'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/newLogin',
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginComponent
    },
    {
      path: '/uploadMedia',
      name: 'uploadMedia',
      component: uploadMedia
    },
    {
      path: '/newLogin',
      name: 'newLogin',
      component: newLogin
    }
  ]
})