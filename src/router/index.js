import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ElementUI from 'element-ui'
import Main from '@/components/Main'
import Index from '@/components/Index'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/main',
      name: 'Main',
      component: Main
    },{
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
