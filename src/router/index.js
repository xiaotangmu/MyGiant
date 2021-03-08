import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ElementUI from 'element-ui'
import Main from '@/components/Main'
import Content from '@/components/Content'
import Content2 from '@/components/Content2'
import Content3 from '@/components/Content3'
import Index from '@/components/Index'
import Test from '@/components/Test'
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
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
    {
      path: '/content2',
      name: 'Content2',
      component: Content2
    },
    {
      path: '/content3',
      name: 'Content3',
      component: Content3
    }
  ]
})
