import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sort from '../views/Sort.vue'
import Brand from '../views/Brand.vue'
import Cart from '../views/Cart.vue'
import Mine from '../views/Mine.vue'
import Product from '../views/Product.vue'
import Setting from '../views/Setting.vue'
import Login from '../views/Login.vue'
import Res from '../views/Res.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
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
		tab:true,
		auth:true
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
    path: '/res',
    name: 'Res',
    component: Res
  	
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting,
	
  },
  
  {
    path: '/mine',
    name: 'Mine',
    component: Mine,
	
	meta:{
		tab:true,
		auth:true
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
import JsCookie from 'js-cookie'

router.beforeEach( (t,f,n)=>{
 	if(t.meta.auth){
 		let logined = JsCookie.get("username");
 		if(!logined){
 			n("/login?next="+t.path)
 			
 			
 		}
 		else{
 		
 			n();
 		}
 		
 	}
 	else{
 	
 		n();
 	}
 	
 } )