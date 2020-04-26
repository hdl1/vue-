<template>
  <div class="hot">
	 
		  <div class="top">
		  		<van-cell title="热门品牌" is-link url="/vant/mobile.html" value="查看全部" />
		  </div>
		  			
		  			<!-- 分割线 -->
				<van-divider />
		  			<div class="body">
		  				<div class="img" v-for="(item,index) in img" :key="index">
		  					<img :src="item" alt="">
		  				</div>
		  			</div>
					<div class="box">
						<img src="../assets/img/pull_down.png" alt="">
					</div>
					
				<div class="list1">
					<div class="left">
						<div class="top">
							<span>{{data1.des}}</span>
							<p>{{data1.des2}}</p>
							<router-link to="/" class="a"> {{data1.des3}} <span>&gt;</span></router-link>
						</div>
						<div class="bottom">
							<img :src="data1.img" alt="">
						</div>
					</div>
					<div class="left">
						<div class="bottom">
							<img :src="data2.img" alt="">
						</div>
						<div class="top">
							<span>{{data2.des}}</span>
							<p>{{data2.des2}}</p>
							<router-link to="/" class="a"> {{data2.des3}} <span>&gt;</span></router-link>
						</div>
					</div>
					<div class="boot">
						<img :src="require('../assets/img/wx.jpg')"alt="">
					</div>
				</div>
	
	
  </div>
</template>

<script>
export default {
  data(){
	  return{
		img:[
			require('../assets/img/hot1.jpg'),
			require('../assets/img/hot2.jpg'),
			require('../assets/img/hot3.png'),
			require('../assets/img/hot4.jpg'),
			require('../assets/img/hot5.jpg'),
			require('../assets/img/hot6.jpg'),
			require('../assets/img/hot7.jpg'),
			require('../assets/img/hot8.jpg'),
			require('../assets/img/hot9.jpg'),
			require('../assets/img/hot10.jpg'),
			],
		data1:
			{
				des:"超值凑单好物",
				des2:"轻松享免邮",
				des3:"点击选购",
				img:require('../assets/img/tu1.jpg'),
			
			},
		data2:{
				des:"精选限时特价",
				des2:"低至8折",
				des3:"点击选购",
				img:require('../assets/img/tu2.jpg'),
			
			},
		
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.hot{
		
			.top{
				background-color: #FFFFFF;
				height:0.9795rem;
				.van-cell__title{
					line-height:0.9795rem ;
					span{
						font-size:30.72px;
					}
				}
				.van-cell__value{
					line-height:0.9795rem ;
					span{
						font-size: 23.04px;
						color:#999;
					}
				}
				.van-icon-arrow::before{
					font-size: 23.04px;
					line-height:0.9795rem ;
				}
			}
			.body{
				background-color: #FFFFFF;
				// padding:0.0864rem  0.192rem;
				display: flex;
				justify-content:space-around;
				flex-wrap: wrap;
				padding: ;
				.img{
					display: flex;
					align-items: center;
					width:20%;
					height:0.76rem;
					padding:0.1152rem 0;
					background-color: #f0f0f0;
					margin: 0.3rem .09rem;
					img{
						width: 100%;
						
					}
				}
			}
			.box{
				background-color: #FFFFFF;
				  position: absolute;
				  width: 1rem;
				  height: .3rem;
				  background-color: #fff;
				  left: 3.25rem;
				  border-radius: 0 0 .1rem .1rem;
				  font-size: 0;
				  img{
					  display: block;
					  width: .22rem;
					  height: .18rem;
					  margin:0 auto;
					 
					  
				  }
				}
				.list1{
					margin-top:0.6rem;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					.left{
						background-color: #FFFFFF;
						.top{
							width:3.552rem;
							height: 1.856rem;
							text-align: center;
							padding-top: 0.4rem;
							span{
								display: block;
								font-size: 0.24rem;
								color:#333333;
								
							}
							p{
								font-size: 0.192rem;
								color: #A9A9A9;
								margin-top: 0.2rem;
								
							}
							.a{
								display: block;
								font-size: 0.192rem;
								color:#333333;
								margin-top: .1rem;
								
								span{
									display: inline-block;
									width: 0.1927rem;
									height: 0.1927rem;
									border-radius: 50%;
									border: 1px solid #333333;
									vertical-align: middle;
									line-height:0.1927rem;
								}
							}
						}
						.bottom{
							width: 3.552rem;
							height: 3.84rem;
							
							img{
								width: 100%;
							}
						}
					}
					.boot{
						width:100%;
						height: 3rem;
						margin:0.2rem 0;
						vertical-align: middle;
						img{
							width: 100%;
						}
					}
				}
			}
	
		
			
	
	
	
</style>
