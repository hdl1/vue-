<template>
	<div class="login">
		<div class="top">
			<router-link to="/">
				<img src="../assets/img/xy.png" alt="">
			</router-link>
			<span>账户登录</span>
			<div class="res">
				<router-link to="/res" class="a" >注册</router-link>
			</div>
			
		</div>
		
		<div class="body">
			<div class="user">
				<i></i>
				<input type="text" placeholder="邮箱/手机" v-model.trim="username">
			</div>
			<div class="pwd">
				<i></i>
				<input type="password" placeholder="请输入密码" v-model.trim="password">
			</div>
			<van-button type="primary" color="#cccccc" size="large" @click="login">登录</van-button>
			<div class="mj" >
				<router-link to="/forget" class="a">忘记密码?</router-link>
			</div>
		</div>
		
		<div class="foot">
			<van-divider>使用其他方式登录</van-divider>
			<div class="img">
				<img src="../assets/img/xinlang.png" alt="">
				<img src="../assets/img/zhifubao.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				username:"",
				password:"",
			}
		},
		methods:{
			login(){
				this.$api.loginAPI({
					userid:this.username,
					userpwd:this.password
				}).then(res=>{
					if(this.username.length<=0 || this.password.length<=0){
						this.$toast("请检查是否输入了用户名和密码")
					}else{
						this.$cookie.set("username",this.username)
						let next=this.$route.query.next
						if(next){
							this.$router.push(next)
						}else{
							this.$router.push("/")
						}
					}
					// console.log(res)
				}).catch(err=>{
					
				})
			},
		}
	}
</script>

<style lang="less" scoped="scoped">
	.login{
		width: 100%;
		height: 100%;
		.top{
			width: 100%;
			display: flex;
			line-height: .88rem;
			justify-content:space-between;
			align-items: center;
			padding: 0 0.28rem;
			.van-divider--hairline{
				border-color:#e0e0e0 ;
			}
			
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
					color:#000000;
					line-height: 1rem;
					padding-left: .12rem;
					border: none;
					background-color: #f0f0f0;
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
					color:#000000;
					line-height: 1rem;
					padding-left: .12rem;
					background-color: #f0f0f0;
					border: none;
				}
			}
			.van-button{
				margin:0.4rem 0;
			}
			.mj{
				
				text-align: right;
				.a{
					color:#999999;
				}
			}
		}
		.foot{
			margin-top: 3rem;
			padding: 0 0.28rem;
			.img{
				height: 0.64rem;
				text-align: center;
				img{
					height: 100%;
					vertical-align: middle;
					margin: 0 .5rem;
				}
			}
		}
	}
</style>
