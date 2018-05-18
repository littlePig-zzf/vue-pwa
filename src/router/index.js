import Vue from 'vue'
import Router from 'vue-router'

export function routerFun (resolve, file) {
  require(['@/views/' + file], resolve)
}

Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => routerFun(resolve, 'index')
    },
    {
      path: '/LineChart',
      name: 'charts/LineChart',
      component: resolve => routerFun(resolve, 'charts/LineChart')
    }
  ]
})

router.beforeEach((to, from, next) => {
  Vue.$vux.loading.show({
    text: 'Loading'
  })
  next()
})

router.beforeResolve((to, from, next) => {
  Vue.$vux.loading.hide()
  next()
})

export default router
