<template>
	<div class="setting">
		<div class="top">
			<div class="left">
					<img src="../assets/img/xy.png" alt="" @click="back">
				</div>
				<h1>账户设置</h1>
			<div class="right">
				<router-link to="/">
					<img src="../assets/img/home2.png" alt="">
				</router-link>
				
			</div>
		</div>
		<van-cell is-link @click="showPopup">头像</van-cell>
		<van-popup v-model="show"   position="bottom" :style="{ height:1.16+'rem' }">
			<van-uploader >
			  <van-button icon="photo" type="primary"  >从手机相册选择</van-button>
			</van-uploader>
		</van-popup>
		<van-cell title="昵称" is-link :value="name" />
		<van-cell title="登录密码" is-link value="修改密码" />
		<van-cell title="绑定手机" is-link  value="去绑定" />
		<van-cell title="邮箱" is-link value="去绑定" />
		<div class="btn">
			<van-button round type="info" size="large" @click="out">退出登录</van-button>
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
				 show: false,
				 name:"",
			}
		},
		created(){
			this.name=this.$cookie.get("username")
			
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			showPopup() {
			      this.show = true;
			    },
			out(){
				this.$cookie.remove('username');
				this.$router.push("/")
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.setting{
		width: 100%;
		
		height: 100%;
		.top{
			background-color: #FFFFFF;
			display: flex;
			justify-content:space-between;
			align-items: center;
			width: 100%;
			height: .88rem;
			padding: 0 0.28rem;
			border-bottom: 1px solid #e0e0e0;
			h1{
				font-size: .36rem;
				color: #212121;
				font-weight: 400;
			}
			.left{
				width: 0.32rem;
				height: 0.32rem;
				img{
					width: 100%;
				}
			}
			
		}
		.van-cell--clickable{
			height:1.08rem;
			font-size: .28rem;
			color: #333;
			line-height: 1.08rem;
			padding: 0 0.28rem;
		}
		.van-cell__right-icon{
			line-height: 1.08rem;
		}
		.van-icon-arrow::before{
			font-size: 0.36rem;
		}
		.van-uploader__input-wrapper{
			button{
				width: 7.2rem;
				height: 1.16rem;
			}
		}
		.btn{
			background-color: #FFFFFF;
			width:100%;
			padding: 1.5rem 0.9rem;
			
		}
		.footer{
			margin-top: 0.5rem;
			width: 100%;
			img{
				width: 100%;
			}
		}
		
		
		
	}
</style>
