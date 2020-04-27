<template>
	<div class="product">
		<div class="top">
			<div class="left">
				<router-link to="/home">
					<img src="../assets/img/xy.png" alt="">
				</router-link>
				</div>
			<div class="right">
				<router-link to="/home">
					<img src="../assets/img/home2.png" alt="">
				</router-link>
				
			</div>
		</div>
		<div class="body">
			<div class="img">
				<img :src="datasInfo.image_url" alt="">
			</div>
			<div class="tex">
				<div class="left">
					{{datasInfo.sales_tags[0]}}
				</div>
				<div class="right">
					距离结束:
					<van-count-down millisecond :time="time" format="HH:mm:ss" />
				</div>
			</div>
			<div class="title">
				<div class="prices">
					<div class="tops">
						<span class="price">{{datasInfo.merchant_currency}}{{datasInfo.final_price}}</span> 
						<span>{{datasInfo.merchant_currency}}{{datasInfo.price}}</span>
					</div>
					<div class="boot">
						参考价:{{datasInfo.reference_currency}}{{datasInfo.reference_price}}
					</div>
				</div>
				
				<div class="name">
					{{datasInfo.name}}
				</div>
				<div class="desc" v-show="datasInfo.short_description">
					{{datasInfo.short_description}}
				</div>
				<div class="active">
					<van-divider />
					<span>促销:</span>
					<span>{{datasInfo.sales_tags[1]}}</span>
					<span>{{active}}</span>
					<br>
					<van-divider />
				</div>
			</div>
		</div>
		
		<div class="number">
			<span class="num">数量</span>
			<van-stepper v-model="value" integer  input-width="100px" button-size="40px" min="1"  max="5" />
			<span class="num2">商品限购5件</span>
		</div>
		<div class="say">
			<span>说明:</span>
			<span>*商品包装会不定期更新,请以到手实物为准.</span>
		</div>
		
		
		<van-goods-action>
		  <van-goods-action-icon icon="chat-o" text="客服" dot />
		  <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
		  <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
		  <van-goods-action-button type="warning" text="加入购物车" />
		  
		</van-goods-action>
			
		
	</div>
</template>

<script>
	import Vue from 'vue';
	import { CountDown } from 'vant';
	Vue.use(CountDown);
	import {total} from '../data';
	export default{
		data(){
			return{
				datasInfo:[],
				time: 30 * 60 * 60 * 1000,
				active:"活动商品买满80欧，重量≤2000g，运费减14.95欧",
				value: "",
				
				
			}
		},
		created(){
			this.datasInfo=total
			this.datasInfo.forEach(item=>{
				item.results.forEach(it=>{
					if(this.$route.params.id==it.product_id){
						this.datasInfo=it
					}
					
				})
			})
			
		},
		
	}
</script>

<style lang="less" scoped="scoped">
	.product{
		margin-bottom:1.5rem;
		.top{
			background-color: #FFFFFF;
			display: flex;
			justify-content:space-between;
			align-items: center;
			width: 100%;
			height: 0.86rem;
			padding: 0 0.28rem;
			border-bottom: 1px solid #999999;
			
		}
		.body{
			background-color: #FFFFFF;
			.img{
				width: 100%;
				height: 5.95rem;
				background: #fff;
				font-size: 0;
				text-align: center;
				img{
					height: 100%;
					padding: 0.5rem;
				}
			}
			.tex{
				display: flex;
				justify-content:flex-start;
				height: .8rem;
				line-height: .8rem;
				padding: 0 .28rem;
				font-size: .24rem;
				color: #fff;
				overflow: hidden;
				background-color: #eb0065;
				.left{
					margin-right: .3rem;
					font-size: .32rem;
					max-width: 3rem;
					height: .72rem;
				}
				.right{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					font-size: .32rem;
					.van-count-down{
						font-size: .32rem;
						color: #fff;
						margin-left: 0.2rem;
					}
					
				}
			}
			.title{
				.prices{
					padding-top: .3rem;
					
					.tops{
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 0 0.28rem;
						span{
							font-size: 0.24rem;
							color: #999;
							text-decoration:line-through;
						}
						.price{
							font-weight: 700;
							font-size: .4rem;
							vertical-align: middle;
							color: #eb0065;
							text-decoration:none;
						}
					}
					.boot{
						padding: 0 0.28rem;
						margin-top: .1rem;
						color: #999;
						font-size: 0.3rem;
					}
				}
				.name{
					margin-top: .28rem;
					font-size: .32rem;
					color: #333;
					padding: 0 0.28rem;
				}
				.desc{
					margin: .12rem 0 .38rem;
					font-size: .24rem;
					color: #999;
					padding: 0 0.28rem;
				}
				.active{
					background: #fff;
					font-size: .24rem;
					color: #999999;
					padding: 0 0.28rem;
					
					
					
					span{
						display: inline-block;
						margin-top: 0.32rem;
						margin-right: 0.3rem;
						font-size: 0.24rem;
						vertical-align: top;
					}
					span:nth-of-type(2){
						width: 1.1rem;
						height:0.4rem;
						line-height: 0.4rem;
						color: #FFFFFF;
						background-color: #eb0065;
						padding: 0 .05rem;
						font-weight: 400;
						
						
					}
					span:nth-of-type(3){
						width:4rem;
						height: 0.9rem;
						font-size: 0.3rem;
						color:#333;
						
						
						
					}
					
				}
				
			}
		}
		.number{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: nowrap;
			font-size: 0.24rem;
			color: #999;
			padding:0.2rem 0.28rem;
			margin-top: 0.2rem;
			background-color: #FFFFFF;
			.num{
				margin-right: 0.5rem;
			}
			.num2{
				margin-left: 0.5rem;
			}
			
		}
		.say{
			font-size: 0.24rem;
			color: #999;
			padding:0.2rem 0.28rem;
			margin-top: 0.2rem;
			background-color: #FFFFFF;
			span{
				margin-right:0.4rem ;
			}
			span:nth-of-type(2){
				font-size: 0.28rem;
				color:#333;
			}
		}
	}
</style>
