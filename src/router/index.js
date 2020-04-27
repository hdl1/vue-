import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sort from '../views/Sort.vue'
import Brand from '../views/Brand.vue'
import Cart from '../views/Cart.vue'
import Mine from '../views/Mine.vue'
import Product from '../views/Product.vue'
import Category from '../views/Category.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
	meta:{
		tab:true
	}
  },
  {
    path: '/sort',
    name: 'Sort',
    component: Sort,
	meta:{
		tab:true
	}
  },
  {
    path: '/brand',
    name: 'Brand',
    component: Brand,
	meta:{
		tab:true
	}
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
	meta:{
		tab:true
	}
  },
  
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
	
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  	
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
	meta:{
		tab:true
	}
  },
  
  {
    path: '/mine',
    name: 'Mine',
    component: Mine,
	redirect:'/login',
	meta:{
		tab:true
	}
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes,
  scrollBehavior:function(){
  	  return {
  		  x:0,
  		  y:0
  	  }
  },
  
})

export default router
