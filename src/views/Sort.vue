<template>
	<div class="sort">
		<div class="top">
			<img src="../assets/img/xy.png" alt="">
			<span>商品分类</span>
		</div>
		<div class="body">
			<div class="left">
				<van-sidebar v-model="activeKey">
				  <van-sidebar-item v-for="(item,index) in datasInfo" v-show="item.name"  :key="index"  :title="item.name" />
				</van-sidebar>
			</div>
			<div class="right" v-for="(item,index) in datasInfo" v-if="index==activeKey" >
				<div   v-if="item.name=='新品上线'">
					<div class="con" v-for="(it,inde) in item.results" :key="inde">
						{{it.name}}
						<img src="" alt="">
						<p></p>
					</div>
				</div>
				
				<div   v-if="item.name=='面部护肤'">
					<div class="con" v-for="(it,inde) in item.results" :key="inde">
						{{it.name}}
						<img src="" alt="">
						<p></p>
					</div>
				</div>
				
				<div v-if="item.name=='魅力彩妆'">
					<div class="con" v-for="(it,inde) in item.results" :key="inde">
						{{it.name}}
						<img src="" alt="">
						<p></p>
					</div>
				</div>
				
				<div v-if="item.name=='美发造型'">
					<div class="con" v-for="(it,inde) in item.results" :key="inde">
						{{it.name}}
						<img src="" alt="">
						<p></p>
					</div>
				</div>
				<div v-if="item.name=='沐浴美体'">
					<div class="con" v-for="(it,inde) in item.results" :key="inde">
						{{it.name}}
						<img src="" alt="">
						<p></p>
					</div>
				</div>
				<div v-if="item.name=='男士护理'">
					<div class="con" v-for="(it,inde) in item.results" :key="inde">
						{{it.name}}
						<img src="" alt="">
						<p></p>
					</div>
				</div>
				<div v-if="item.name=='配饰工具'">
					<div class="con" v-for="(it,inde) in item.results" :key="inde">
						{{it.name}}
						<img src="" alt="">
						<p></p>
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
			  selected:null,
			
		    };
		  },
		  created(){
				this.datasInfo=total
				// total.forEach(item=>{
				// 	this.datas=item.results
				// 	console.log(item.results)
				// 	if(item.name){
				// 		this.selected=item.name
				// 		// console.log(item.name)
				// 	}
					
				// })
				
				
				
			
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
				.van-sidebar{
					margin-top: 0.2rem;
				}
			}
			.right{
				background-color: #FFFFFF;
				position: absolute;
				top:1.1rem;
				left:30%;
				right:0;
				bottom:0;
			}
		}
		
	}
</style>
