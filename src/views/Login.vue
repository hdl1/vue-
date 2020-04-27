<template>
	<div class="login">
		<div class="top">
			<router-link to="/home">
				<img src="../assets/img/xy.png" alt="">
			</router-link>
			<span>账户登录</span>
			<div class="res">
				<router-link to="/res" class="a" >注册</router-link>
			</div>
			<van-divider />
		</div>
		
		<div class="body">
			<div class="user">
				<i></i>
				<input type="text" placeholder="邮箱/手机">
			</div>
			<div class="pwd">
				<i></i>
				<input type="text" placeholder="请输入密码">
			</div>
			<van-button type="primary" size="large">大号按钮</van-button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			clicks(){
				this.num=10
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.login{
		.top{
			width: 100%;
			display: flex;
			line-height: .88rem;
			justify-content:space-between;
			align-items: center;
			padding: 0 0.28rem;
			background-color: #FFFFFF;
			span{
				font-size: .36rem;
				color: #212121;
				font-weight: 400;
			}
			img{
				width: 0.4rem;
				height: 0.4rem;
			}
			.res{
				.a{
					color: #333;
				}
				
				font-size: .3rem;
			}
		}
		.body{
			background-color: #FFFFFF;
			padding: 0 0.6rem;
			.user{
				display: flex;
				justify-content:flex-start;
				align-items: center;
				padding-top: 0.34rem;
				border-bottom:1px solid #e0e0e0;
				i{
					display: block;
					width: .42rem;
					height: .42rem;
					background-image: url(../assets/img/icon.png);
					background-position: -.88rem -1.26rem;
					background-size: 1.68rem 1.68rem;
					margin-right: 0.3rem;
				}
				input{
					height: 1rem;
					font-size: .3rem;
					color:#CCCCCC;
					line-height: 1rem;
					padding-left: .12rem;
					border: none;
				}
			}
			.pwd{
				display: flex;
				justify-content:flex-start;
				align-items: center;
				padding-top: 0.34rem;
				border-bottom:1px solid #e0e0e0;
				i{
					display: block;
					width: .42rem;
					height: .42rem;
					background-image: url(../assets/img/icon.png);
					background-position: 0 -1.26rem;
					background-size: 1.68rem 1.68rem;
					margin-right: 0.3rem;
				}
				input{
					height: 1rem;
					font-size: .3rem;
					color:#CCCCCC;
					line-height: 1rem;
					padding-left: .12rem;
					border: none;
				}
			}
		}
	}
</style>
