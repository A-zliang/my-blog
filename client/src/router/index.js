import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Article from '@/components/Article.vue'
import Login from '@/components/admin/Login.vue'
import Register from '@/components/admin/Register.vue'
import managePage from '@/components/admin/managePage.vue'
import Article_manager from '@/components/admin/Article_manager.vue'
import newArticle from '@/components/admin/newArticle.vue'
import userManage from '@/components/admin/userManage.vue'

Vue.use(Router)


export default new Router({
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      }, 
      {
        path: '/Login',
        name: 'Login',
        component: Login,
      }, 
      {
        path: '/Register',
        name: 'Register',
        component: Register
      },
      {
        path: '/Article',
        name: 'Article',
        component: Article,
      }, 
      {
        path: '/managePage',
        name: 'managePage',
        component: managePage,
        children:[
          {
            path: '/',
            name: 'Article_manager',
            component: Article_manager
          },
          {
            path: '/Article_manager',
            name: 'Article_manager',
            component: Article_manager
          },
          {
            path: '/newArticle',
            name: 'newArticle',
            component: newArticle
          },
          {
            path: '/userManage',
            name: 'userManage',
            component: userManage
          }
        ]
      } 
    ]
  })

