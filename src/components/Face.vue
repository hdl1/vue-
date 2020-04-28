<template>
  <div class="face">
	  <div class="top">
		 <span>
			  — 面部护肤 —
		 </span>
		 
	  </div>
	
	  <div class="body" >
		  <div class="con" v-for="(item,index) in datas">
			  <div class="left">
				  <router-link :to="'/product/'+item.product_id" class="a">
					<img :src="item.image_url" alt="">
				  </router-link>
			  </div>
			  <div class="right">
				  <router-link :to="'/product/'+item.product_id" class="a">
					  <h3>{{item.name}}</h3>
				   </router-link>
					  <div class="tex">
					  	<div class="t_left">
							 <router-link :to="'/product/'+item.product_id" class="a">
								<span class="price">{{item.final_price}}{{item.merchant_currency}}</span><span>{{item.price}}{{item.merchant_currency}}</span>
								<p>参考价:￥{{item.reference_price}}</p>
							 </router-link>
					  	</div>
					  <div class="t_right">
						  <van-button color="#333333" size="normal" class="btn"  @click="addcart(item)">加入购物篮</van-button>
					  </div>
				  </div>
				 
				 
			  </div>
		  </div>
		  <div class="bottom">
			  <router-link to="/category" class="a">
				   查看更多>
			  </router-link>
			 
		  </div>
	  </div>
		
  </div>
</template>

<script>
	import { Face} from '../data';
export default {
  data(){
	  return{
		 datas:[],
	  }
  },
  created(){
	  this.datas=Face.results
	  // console.log(Face.results);
  },
  methods:{
  
  	  addcart(it){
  
  	  		  this.$store.dispatch("addAsync",{
  
  	  		      goodid:it.product_id,
  
  	  		      name:it.name,
  
  	  		      price:it.reference_price,
  
  	  		      desc:it.short_description,
  
  	  		      num:1,
  
  	  		      image:it.image_url,
  
  	  		  }).then(()=>{
  
  	  		  	this.$toast("加入购物车成功")
  
  	  		  })
  
  	  }
  
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.face{
		background-color: #FFFFFF;
		margin-top: 0.2rem;
		.top{
			height: 1.1rem;
			border-bottom: 1px solid #e0e0e0;
			span{
				float: left;
				font-size: 0.32rem;
				margin-left: .2rem;
				padding-top: .05rem;
				line-height:1.1rem; 
			}
		}
		.body{
			width: 100%;
			margin-top: 0.4rem;
			.con{
				display: flex;
				justify-content: center;
				.left{
					width: 45%;
					padding-left: 0.19rem;
					img{
						width: 100%;
					}
				}
				.right{
					width: 55%;
					.a{
						display: block;
					}
					
					h3{
						font-size: 0.268rem;
						color:#333333;
						margin-bottom: 0.3rem;
						overflow: hidden;
						-ms-text-overflow: ellipsis;
						-o-text-overflow: ellipsis;
						text-overflow: ellipsis;
						display: -moz-box;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
					.tex{
						display:flex;
						justify-content:space-between;
						margin-top: 0.8rem;
						.t_left{
							.price{
								font-size: 0.3rem;
								color:#eb0065;
							}
							span{
								font-size: .24rem;
								color: #999;
								padding-right: 0.1rem;
								
							}
							span:nth-of-type(2){
								text-decoration:line-through
							}
							p{
								font-size: .24rem;
								color: #999;
								margin: .08rem 0 0.2rem 0;
							}
						}
						.t_right{
							.btn{
								width: 1.5rem;
								height: .54rem;
								line-height: .54rem;
								background-color: #333;
								color: #fff;
								font-size: .18rem;
								text-align: center;
								border-radius: .02rem;
								margin:0.3rem  0.1rem 0.2rem 0;
							}
						}
					}
					
				}
			}
			.bottom{
				height: .82rem;
				text-align: center;
				line-height: .73rem;
				font-size: .24rem;
				margin-top: 0.2rem;
				.a{
					color: #000000;
				}
			}
		}
	}

</style>
