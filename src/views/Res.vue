<template>
	<div class="res">
		<div class="top">
			<router-link to="/">
				<img src="../assets/img/xy.png" alt="">
			</router-link>
			<span>手机注册</span>
			<van-divider />
		</div>
		
		<div class="body">
			<div class="user">
				<i></i>
				<label>+86</label>
				<input type="text" placeholder="请输入手机号" v-model.trim="tel">
			</div>
			<div class="pwd">
				<i></i>
				<input type="text" placeholder="请输入验证码" v-model.trim="yzm">
				<van-button color="#000000" :style="{borderRadius: .34+'rem',height: .68+'rem',fontSize:0.12+'rem',lineHeight:0.68+'rem'}" @click="getyzm">获取验证码</van-button>
			</div>
			<div class="pwd">
				<i style="background-position: 0 -1.26rem"></i>
				<input type="password" placeholder="请输入密码" v-model.trim=" pwd">
			</div>
			<div class="mj" >
				用户注册代表同意 <a href="#">《服务条款》</a>和<a href="#">《隐私条款》</a>
			</div>
			<van-button type="primary" color="#cccccc" size="large" @click="res">立即注册</van-button>
			
		</div>
		
	
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tel:"",
				pwd:"",
				yzm:"",
			}
		},
		methods:{
			//获取短信验证码
			getyzm(){
				this.$api.sendAPI({
					username:this.tel,
					pwd:this.pwd,
				}).then(res=>{
					if(res.data.code==0){
						this.$toast("短信验证码已发送")
					}
					console.log(res)
				}).catch(err=>{
					console.log("出错",err)
				})
			},
			//注册
			res(){
				if(this.tel.length<=0 || this.pwd.length<=0 || this.yzm.length<=0){
					this.$toast("请检查输入是否正确");	
				}else{
					this.$api.sendAPI({
						username:this.tel,
						pwd:this.pwd,
					}).then(res=>{
						this.$cookie.set('token', res.data.token);
						this.$toast("注册成功")
						// console.log(res)
						this.$router.push("/login")
						
					}).catch(err=>{
						console.log("出错",err)
					})
					
				}
			},
		}
	}
</script>

<style lang="less" scoped="scoped">
	.res{
		width: 100%;
		height: 100%;
		.top{
			width: 100%;
			display: flex;
			line-height: .88rem;
			justify-content:space-between;
			align-items: center;
			padding: 0 0.28rem;
			
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
					background-position: -1.26rem -.44rem;
					background-size: 1.68rem 1.68rem;
					margin-right: 0.3rem;
				}
				label{
					font-size: .3rem;
					color: #333;
					letter-spacing: 0;
					line-height: .3rem;
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
					background-position: -1.26rem 0;
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
				
				font-size: 0.24rem;
				color:#999999;
				margin-top: 0.2rem;
			}
		}
		
	}
</style>
