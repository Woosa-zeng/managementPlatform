import Vue from 'vue'
import Router from 'vue-router'
import firstpage from '@/components/firstpage/firstpage'
import test from '@/components/test/test'
import header from '@/components/header/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstpage',
      component: firstpage
    },
    {
      path: '/test',
      name: 'test',
      component: test,
      children: [
        {
          path: '/header',
          component: header,
          meta: {requireAuth: true}
        }
      ]
    }
  ]
})

