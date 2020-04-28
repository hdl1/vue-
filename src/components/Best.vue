<template>
  <div class="best">
	  <div class="top">
		 <span>
			  — 畅销榜单 —
		 </span>
		 
	  </div>
	
	  <div class="body">
		  <div class="con" v-for="(item,index) in datas">
			  <router-link :to="'/product/'+item.product_id " class="b"> 
				  <img :src="item.image_url" alt="">
				   <h3>{{item.name}}</h3>
				  <span class="price">{{item.final_price}}{{item.merchant_currency}}</span><span>{{item.price}}{{item.merchant_currency}}</span>
				   <p>参考价:￥{{item.reference_price}}</p>
			  </router-link>
			  <van-button color="#333333" size="large" class="btn" @click="addcart(item)">加入购物篮</van-button>
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
	import { Datas} from '../data';
export default {
  data(){
	  return{
		 datas:[],
	  }
  },
  created(){
	  this.datas=Datas.results
	  // console.log(Datas.results);
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.best{
		background-color: #FFFFFF;
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
			display:flex;
			justify-content: space-around;
			flex-wrap: wrap;
			align-items: center;
			width: 100%;
			margin-top: 0.4rem;
			
			.con{
				
				width: 50%;
				padding: 0 0.28rem;
				margin-top: 0.4rem;
				.b{
					display: block;
					.price{
						font-size: 0.3rem;
						color:#eb0065;
					}
					span{
						font-size: .24rem;
						color: #999;
						margin-left:0.2rem;
						
						
						
					}
					span:nth-of-type(2){
						text-decoration:line-through
					}
					p{
						font-size: .24rem;
						color: #999;
						margin: .08rem 0 0.2rem 0;
					}
					h3{
						font-size: 0.268rem;
						color:#333333;
						white-space: nowrap;
						overflow: hidden;
						text-overflow:ellipsis;
						margin-bottom: 0.3rem;
						
						
					}
					img{
						width: 100%;
					
				}
				}
				.btn{
					height: 0.68rem;
					font-size:0.28rem ;
					color:#FFFFFF;
					line-height: 0.68rem;
					
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
