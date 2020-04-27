<template>
  <div class="home">
	  <div class="body">
		  <!-- 顶部 -->
		  		<div class="top">
		  			<div class="left">
		  				<img src="../assets/img/feelunique-large.png" alt="">
		  			</div>
		  			<div class="right">
		  				<img src="../assets/img/search.png" alt="">
		  				<img src="../assets/img/service.png" alt="">
		  			</div>
		  		</div>
		  		
		  		<!-- 轮播 -->
		  		<van-swipe :autoplay="3000">
		  		  <van-swipe-item v-for="(image, index) in images" :key="index"  class="swipe">
		  		    <img v-lazy="image.image_url" />
		  		  </van-swipe-item>
		  		</van-swipe>
		  		<!-- 轮播  end-->
		  		<List></List>
		  		
		  		<!-- 分割线 -->
		  		<div class="div"></div>
		  		
		  		<!-- 热门品牌 -->
		  		<Hot></Hot>
				
				<!-- 畅销 -->
				<Best></Best>
				
				<!-- 面部护肤 -->
				<Face></Face>
				
				<!-- 彩妆 -->
				<Cosmetics></Cosmetics>
				
				<!-- 美发 -->
				<Hair></Hair>
				
				<!-- 沐浴美体 -->
				<Bath></Bath>
				
				<!-- 男士护理 -->
				<Man></Man>
				
				<!-- 配饰工具 -->
				<Accessories></Accessories>
				
				<!-- 底部 -->
				<Bottom></Bottom>
		  		
	  </div>
	 
		
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import List from '@/components/List.vue'
import Hot from '@/components/Hot.vue'
import Best from '@/components/Best.vue'
import Face from '@/components/Face.vue'
import Cosmetics from '@/components/Cosmetics.vue'
import Hair from '@/components/Hair.vue'
import Bath from '@/components/Bath.vue'
import Man from '@/components/Man.vue'
import Accessories from '@/components/Accessories.vue'
import Bottom from '@/components/Bottom.vue'

import Vue from 'vue';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
import { Banner} from '../data';
export default {
  name: 'Home',
  components: {
    List,
	Hot,
	Best,
	Face,
	Cosmetics,
	Hair,
	Bath,
	Man,
	Accessories,
	Bottom
  },
  data(){
	  return{
		 images: [],
		
	  }
  },
  created(){
	  this.images=Banner.data
	  // console.log(Banner.data)
  },
}
</script>

<style lang="less" scoped="scoped">
	.home{
		.body{
			margin-bottom:50px;
			.top{
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color: #FFFFFF;
				
				.left{
					width: 3.37rem;
					height: 0.64rem;
					vertical-align: middle;
					margin:0.2rem 0;
					padding:0 0.2rem;
					img{
						width: 100%;
					}
				}
				.right{
					img{
						margin-right: 0.36rem;
					}
				}
			}
			.swipe{
				width:100%;
				height:4rem;
				img{
					width:100%;
					height:4rem;
				}
			}
			.div{
				height:0.1rem;
				background-color: #f0f0f0;
			}
		}
		
		
	}
</style>
