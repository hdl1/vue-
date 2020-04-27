<template>
  <div class="list">
		<ul>
			<li v-for="(item,index) in datas" :key="index">
					<router-link to="/category" class="a">
						<img :src="item.img" alt="">
						<span>{{item.name}}</span>
					</router-link>
					
				
				
			</li>
		</ul>
  </div>
</template>

<script>
export default {
  data(){
	  return{
		 datas:[
			 {
		  	img:require("../assets/img/hf.jpg"),
		  	name:"护肤",
		   },
		   {
		   	img:require("../assets/img/cz.jpg"),
		   	name:"彩妆",
		   },
		   {
		   	img:require("../assets/img/hh.jpg"),
		   	name:"护发",
		   },
		   {
		   	img:require("../assets/img/mt.jpg"),
		   	name:"美体",
		   },
		   {
		   	img:require("../assets/img/ps.jpg"),
		   	name:"配饰",
		   },
		  ],
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.list{
		background-color: #FFFFFF;
		.a{
			display: block;
			text-align: center;
			display: flex;
			justify-content: center;
			flex-flow: column;
			align-items: center;
		}
		ul{
			
			display: flex;
			
			li{
				width: 20%;
				height:0.899rem;
				margin: 0.4rem 0;
				
			
				img{
					width:0.7871rem;
					height: 0.8953rem;
				}
				span{
					font-size: 0.28rem;
					color:#333;
					
				}
				
			}
		}
	}
</style>
