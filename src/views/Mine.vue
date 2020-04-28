<template>
	<div class="mine">
		<div class="top">
			<img src="../assets/img/mine_bg.jpg" alt="">
			<i></i>
			<div class="photo">
				<i></i>
			</div>
		</div>
		<div class="name">{{username}}</div>
		
		<div class="body">
			<div class="con">
				<span>我的订单</span>
				<img src="../assets/img/back2.png" alt="">
			</div>
			<div class="content">
				<ul>
					<li>
						<i></i>
						<p>待付款</p>
					</li>
					<li>
						<i></i>
						<p>已付款</p>
					</li>
					<li>
						<i></i>
						<p>已发货</p>
					</li>
					<li>
						<i></i>
						<p>已完成</p>
					</li>

					<li>
						<i></i>
						<p>已取消</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="body2">
			<div class="con">
				<span>我的服务</span>
			</div>
			<div class="content">
				<ul>
					<li>
						<i></i>
						<p>优惠券</p>
					</li>
					<li>
						<i></i>
						<p>收藏夹</p>
					</li>
					<li>
						<i></i>
						<p>地址</p>
					</li>
					<li>
						<i></i>
						<p>安全中心</p>
					</li>
			
					<li>
						<i></i>
						<p>分享奖励</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="foot">
			<div class="con">
				<span>帮助中心</span>
				<img src="../assets/img/back2.png" alt="">
			</div>
			<div class="con">
				<span>关于我们</span>
				<img src="../assets/img/back2.png" alt="">
			</div>
		</div>
		<div class="footer">
			<img src="../assets/img/AC.jpg" alt="">
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				username:"",
			}
			
		},
		created(){
			this.username=this.$cookie.get("username")
			// console.log(this.username)
		}
	}
</script>

<style lang="less" scoped="scoped">
	.mine{
		.top{
			width: 100%;
			img{
				width: 100%;
			}
			i{
				display: block;
				position: absolute;
				right: .3rem;
				top: .26rem;
				background-image: url(../assets/img/mine_icon.png);
				background-position: -7.62rem -8.78rem;
				background-size: 14.21rem 9.94rem;
				width: .36rem;
				height: .36rem;
			}
			.photo{
				position: absolute;
				top:0.7rem;
				left:2rem;
				i{
					display: inline-block;
					width: 1.16rem;
					height: 1.16rem;
					background-image: url(../assets/img/mine_icon.png);
					background-position: 0 -8.78rem;
					background-size: 14.21rem 9.94rem;
				}
				
				
			}
			
		}
		.name{
			position: absolute;
			top:1.28rem;
			left:2.1rem;
			font-size: 0.3rem;
			color:#FFFFFF;
		}
		.body{
			background-color: #FFFFFF;
			.con{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0.5rem 0.4rem;
				font-size:0.28rem;
				font-weight: 4rem;
				border-bottom: 1px solid #e0e0e0;
				img{
					width: .19rem;
					height: .35rem;
				}
			}
			
			.content{
				
			    ul{
					display:flex;
					justify-content:center;
					align-items: center;
				}
				li{
					width: 20%;
					display: flex;
					flex-direction: column;
					align-items: center;
					font-size: 0.24rem;
					color: #333;
					padding: 0.4rem 0;
					p{
						margin-top: 0.2rem;
					}
					
				}
				li:nth-of-type(1){
					i{
						display: block;
						background-image: url(../assets/img/mine_icon.png);
						background-position: -4.87rem -8.78rem;
						background-size: 14.21rem 9.94rem;
						width: .5rem;
						height: .5rem;
					}
				}
				li:nth-of-type(2){
					i{
						display: block;
						background-image: url(../assets/img/mine_icon.png);
						background-position: -7.07rem -8.78rem;
						background-size: 14.21rem 9.94rem;
						width: .5rem;
						height: .5rem;
					}
				}
				li:nth-of-type(3){
					i{
						display: block;
						background-image: url(../assets/img/mine_icon.png);
						background-position: -4.87rem -8.78rem;
						background-size: 14.21rem 9.94rem;
						width: .5rem;
						height: .5rem;
					}
				}
				li:nth-of-type(4){
					i{
						display: block;
						background-image: url(../assets/img/mine_icon.png);
						background-position: -5.97rem -8.78rem;
						background-size: 14.21rem 9.94rem;
						width: .5rem;
						height: .5rem;
					}
				}
				li:nth-of-type(5){
					i{
						display: block;
						background-image: url(../assets/img/mine_icon.png);
						background-position: -3.22rem -8.78rem;
						background-size: 14.21rem 9.94rem;
						width: .5rem;
						height: .5rem;
					}
				}
			}
			
		}
		.body2{
			margin-top: 0.2rem;
			background-color: #FFFFFF;
			.con{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0.5rem 0.4rem;
				font-size:0.28rem;
				font-weight: 4rem;
				border-bottom: 1px solid #e0e0e0;
				img{
					width: .19rem;
					height: .35rem;
				}
			}
			
			.content{
				
			    ul{
					display:flex;
					justify-content:center;
					align-items: center;
				}
				li{
					width:25%;
					display: flex;
					flex-direction: column;
					flex-wrap: wrap;
					align-items: center;
					font-size: 0.24rem;
					color: #333;
					padding: 0.4rem 0;
					p{
						margin-top: 0.2rem;
					}
					
				}
				li:nth-of-type(1){
					i{
						display: block;
						background-image: url(../assets/img/mine_icon.png);
						background-position: -2.67rem -8.78rem;
						background-size: 14.21rem 9.94rem;
						width: .5rem;
						height: .5rem;
					}
				}
				li:nth-of-type(2){
					i{
						display: block;
						background-image: url(../assets/img/mine_icon.png);
						background-position: -3.77rem -8.78rem;
						background-size: 14.21rem 9.94rem;
						width: .5rem;
						height: .5rem;
					}
				}
				li:nth-of-type(3){
					i{
						display: block;
						background-image: url(../assets/img/mine_icon.png);
						background-position: -4.32rem -8.78rem;
						background-size: 14.21rem 9.94rem;
						width: .5rem;
						height: .5rem;
					}
				}
				li:nth-of-type(4){
					i{
						display: block;
						background-image: url(../assets/img/mine_icon.png);
						background-position: -6.52rem -8.78rem;
						background-size: 14.21rem 9.94rem;
						width: .5rem;
						height: .5rem;
					}
				}
				li:nth-of-type(5){
					i{
						display: block;
						background-image: url(../assets/img/mine_icon.png);
						background-position: -9.13rem -8.78rem;
						background-size: 14.21rem 9.94rem;
						width: .5rem;
						height: .5rem;
					}
				}
			}
		}
		.foot{
			background-color: #FFFFFF;
			margin-top: 0.2rem;
			.con{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0.5rem 0.4rem;
				font-size:0.28rem;
				font-weight: 4rem;
				border-bottom: 1px solid #e0e0e0;
				img{
					width: .19rem;
					height: .35rem;
				}
			}
		}
		.footer{
		
			width: 100%;
			img{
				width: 100%;
			}
		}
		margin-bottom:2rem;
	}
</style>
