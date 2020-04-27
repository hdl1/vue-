<template>
	<div class="bottom">
		<div class="top">
			<ul>
				<li>
					<div class="left">
						<img src="../assets/img/converge.png" alt="">
					</div>
					<div class="right">
						<h3>名品汇聚</h3>
						<p>数百国际大牌、专业药妆</p>
					</div>
				</li>
				<li>
					<div class="left">
						<img src="../assets/img/plane.png" alt="">
					</div>
					<div class="right">
						<h3>海外直邮</h3>
						<p>满80欧中国大陆免邮</p>
					</div>
				</li>
				<li>
					<div class="left">
						<img src="../assets/img/convenient.png" alt="">
					</div>
					<div class="right">
						<h3>便捷支付</h3>
						<p>支付宝/微信、银联付款</p>
					</div>
				</li>
				<li>
					<div class="left">
						<img src="../assets/img/custom_service.png" alt="">
					</div>
					<div class="right">
						<h3>中文客服</h3>
						<p>中文客服邮箱,售后有保障</p>
					</div>
				</li>
				
			</ul>
		</div>
		<div class="foot">
			<div class="img1">
				<img src="../assets/img/zhifu.png" alt="">
				<img src="../assets/img/unionpay.png" alt="">
			</div>
			<div class="img2">
				<div class="left">
					<img src="../assets/img/wx.png" alt="">
				</div>
				<div class="right">
					<img src="../assets/img/youtube.png" alt="">
				</div>
				
			</div>
		</div>
		<div class="foot2">
			<p>PerfumesClub.com © 2009-2019. All rights reserved</p>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped="scoped">
	.bottom{
		background-color: #FFFFFF;
		.top{
			ul{
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				width: 100%;
				li{
					display: flex;
					justify-content: flex-start;
					width: 50%;
					padding: .6rem .2rem 0;
					.left{
						width: .65rem;
						height: .65rem;
						margin-right: .2rem;
						border: 1px solid #333;
						border-radius:50%;
						img{
							display: block;
							margin: .2rem auto;
							width: .3rem;
							height: .26rem;
							
						}
					}
					.right{
						h3{
							font-size: .24rem;
							color: #333;
							margin-bottom: .1rem;
						}
						p{
							font-size: .2rem;
							color: #999;
						}
					}
				}
			}
		}
		.foot{
			background-color: #b89d67;
			margin-top: 0.4rem;
			.img1,.img2{
				padding-top: .4rem;
				display: flex;
				justify-content: center;
				img{
					margin-right: 0.4rem;
				}
				
			}
			.img2{
				padding-bottom: 0.3rem;
				.left,.right{
					width: .6rem;
					height: .6rem;
					line-height: .6rem;
					text-align: center;
					background-color: #fff;
					margin-right: .3rem;
					border-radius:0.06rem;
					padding: 0.1rem;
					img{
						width: 100%;
					}
				}
			}
		}
		.foot2{
			height: .61rem;
			line-height: .61rem;
			padding: 0 .2rem;
			text-align:center;
			font-size: .22rem;
			background: #111419;
			color: #fff;
		}
	}
</style>
