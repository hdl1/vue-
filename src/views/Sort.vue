<template>
	<div class="sort">
		<div class="top">
			<span>商品分类</span>
		</div>
		<div class="body">
			<div class="left">
				<van-sidebar v-model="activeKey">
				  <van-sidebar-item v-for="(item,index) in datasInfo" v-show="item.name"  :key="index"  :title="item.name" />
				</van-sidebar>
			</div>
			<div class="right" v-for="(item,index) in datasInfo" v-if="index==activeKey" >
				<div   v-if="item.name=='新品上线'" class="content">
					<div class="con" v-for="(it,inde) in item.results" :key="inde">
						<router-link :to="'/product/'+it.product_id " class="a">
							<img :src="it.image_url" alt="">
							<p>{{it.name}}</p>
						</router-link>
						
					</div>
				</div>
				
				<div   v-if="item.name=='面部护肤'" class="content">
					<div class="con" v-for="(it,inde) in item.results" :key="inde">
						<router-link :to="'/product/'+it.product_id " class="a">
							<img :src="it.image_url" alt="">
							<p>{{it.name}}</p>
						</router-link>
					</div>
				</div>
				
				<div v-if="item.name=='魅力彩妆'" class="content">
					<div class="con" v-for="(it,inde) in item.results" :key="inde">
						<router-link :to="'/product/'+it.product_id " class="a">
							<img :src="it.image_url" alt="">
							<p>{{it.name}}</p>
						</router-link>
					</div>
				</div>
				
				<div v-if="item.name=='美发造型'" class="content">
					<div class="con" v-for="(it,inde) in item.results" :key="inde">
						<router-link :to="'/product/'+it.product_id " class="a">
							<img :src="it.image_url" alt="">
							<p>{{it.name}}</p>
						</router-link>
					</div>
				</div>
				<div v-if="item.name=='沐浴美体'" class="content">
					<div class="con" v-for="(it,inde) in item.results" :key="inde">
						<router-link :to="'/product/'+it.product_id " class="a">
							<img :src="it.image_url" alt="">
							<p>{{it.name}}</p>
						</router-link>
					</div>
				</div>
				<div v-if="item.name=='男士护理'" class="content">
					<div class="con" v-for="(it,inde) in item.results" :key="inde">
						<router-link :to="'/product/'+it.product_id " class="a">
							<img :src="it.image_url" alt="">
							<p>{{it.name}}</p>
						</router-link>
					</div>
				</div>
				<div v-if="item.name=='配饰工具'" class="content">
					<div class="con" v-for="(it,inde) in item.results" :key="inde">
						<router-link :to="'/product/'+it.product_id " class="a">
							<img :src="it.image_url" alt="">
							<p>{{it.name}}</p>
						</router-link>
					</div>
				</div>
				
				
			</div>
			
			
		</div>
		
	</div>
</template>

<script>
	import {Face,Cz,Mf,Bath,total} from '../data';
	export default{
		 data() {
		    return {
		      activeKey: 1,
			  datasInfo:null,
			  
			
		    };
		  },
		  created(){
				this.datasInfo=total
				// console.log(total)
		  }
		
	}
</script>

<style lang="less" scoped="scoped">
	.sort{
		.top{
			display: flex;
			justify-content:flex-start;
			align-items: center;
			font-size: 0.3rem;
			background-color: #FFFFFF;
			padding: 0.2rem ;
			span{
				display: block;
				margin: 0 auto;
			}
			img{
				width: 0.32rem;
				height: 0.32rem;
			}
			
		}
		.body{
			background-color: #FFFFFF;
			.left{
				position: absolute;
				top:1rem;
				left:0;
				right:0;
				bottom:0;
				width:30%;
				overflow-y: scroll;
				background-color: #FFFFFF;
				.van-sidebar{
					width:100%;
					
					
				}
				.van-sidebar-item{
					font-size: 0.28rem;
					text-align: center;
					color:#333333;
				}
				.van-sidebar-item--select{
					border-color:#333333;
					font-weight: 700;
				}
				
			}
			.right{
				background-color: #FFFFFF;
				position: absolute;
				top:1rem;
				left:30%;
				right:0;
				bottom:0;
				overflow: scroll;
				.content{
					display: flex;
					justify-content:space-around;
					align-items: center;
					flex-wrap: wrap;
					padding: 0.2rem;
					
					.con{
						width:30%;
						margin-top: 0.2rem;
						margin-left: 0.01rem;
						overflow : hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						.a{
							display: block;
							img{
								width: 100%;
								padding: 0.2rem;
							}
							p{
								font-size: 0.18rem;
								color:#333333;
								text-align: center;
							}
						}
						
					}
				}
			}
			
		}
		
	}
</style>
