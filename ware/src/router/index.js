import Vue from 'vue'
import Router from 'vue-router'
import navLeft from '../components/nav/navLeft.vue'
import login from '../components/login/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'navLeft',
      component: navLeft
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
