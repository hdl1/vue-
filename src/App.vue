<template>
  <div id="app">
    <router-view/>
	<!-- 底部导航 -->
	<van-tabbar v-model="active" v-show="$route.meta.tab">
	  <van-tabbar-item :icon="icon.homeActive" to="/">首页</van-tabbar-item>
	  <van-tabbar-item :icon="icon.sortActive" to="sort">分类</van-tabbar-item>
	  <van-tabbar-item :icon="icon.brandActive" to="brand">品牌</van-tabbar-item>
	  <van-tabbar-item :icon="icon.cartActive" to="cart">购物篮</van-tabbar-item>
	  <van-tabbar-item :icon="icon.mineActive" to="mine">个人中心</van-tabbar-item>
	</van-tabbar>
  </div>
</template>

<script>
	export default {
	  data() {
	    return {
	      active: 0,
	           icon: {
	             homeActive: require('./assets/img/home3.png'),
				 sortActive: require('./assets/img/sort.png'),
				 brandActive: require('./assets/img/brand.png'),
				 cartActive: require('./assets/img/cart.png'),
				 mineActive: require('./assets/img/mine.png'),
	           },
	    };
	  },
	};
</script>



<style lang="less" scoped="scoped">
   .van-tabbar-item--active{
	   color:#333333;
   }
  .van-tabbar{
	  height: 0.99rem;
	  .van-tabbar-item {
		  font-size: .16rem;
		  color: #333;
		 
		  
	  }
	 
	
  }

</style>
