import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NoterMain from '@/components/NoterMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NoterMain',
      component: NoterMain
    }
  ]
})
