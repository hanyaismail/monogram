import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Upload from '@/components/Upload'
import Images from '@/components/Images'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import UserHomeTest from '@/components/UserHomeTest'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '*',
  		redirect: 'upload'
  	},
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/upload',
    	name: 'upload',
    	component: Upload
    },
    {
    	path: '/images',
    	name: 'images',
    	component: Images
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/userhometest',
      name: 'userhometest',
      component: UserHomeTest
    }
  ]
})
