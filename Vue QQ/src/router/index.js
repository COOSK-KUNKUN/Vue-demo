import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import header from '@/components/header.vue'
import play from '@/components/play.vue'

Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',
      component: header
    },
    {
        path: '/play',
        component: play
    }
  ]
})
