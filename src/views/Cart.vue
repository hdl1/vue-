<template>
  <div class="cart">
	  <van-nav-bar title="购物车" fixed left-text="返回" left-arrow @click-left="onClickLeft"
	  @click-right="onClickRight">
	    <template #right>
	      <van-icon name="search" size="18" />
	    </template>
	  </van-nav-bar>
	  <div class="content">
		<van-card v-for="(good,index) in $store.getters.getgoodslist" :key="index"
		  :num="good.num"
		  :price="good.price"
		  :desc="good.desc"
		  :title="good.name"
		  :thumb="good.image"
		 
		>
		  <template #footer>
			<van-button size="mini" @click="changeNum(good.goodid,good.num-1)" >-</van-button>
			<van-button size="mini" @click="changeNum(good.goodid,good.num+1)">+</van-button>
			<van-button size="mini" @click="remove(good.goodid)">移除</van-button>
		  </template>
		</van-card>
	  </div>
   
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
  },
  data(){
	  return{
		  
	  }
  },
  methods:{
	  changeNum(goodid,num){
	  		  this.$store.dispatch("changeNumAsync",{
	  		  			  id:goodid,
	  					  num:num
	  		  }).then(()=>{
	  		  			  
	  		  })
	  },
	  remove(goodid){
	  		  this.$store.dispatch("removeAsync",{
	  			  id:goodid,
	  			  
	  		  }).then(()=>{
	  			  this.$toast("移除成功!")
	  		  })
	  },
	  
	  
	  
	  
	  onClickLeft() {
	    this.$router.go(-1);
	  },
	  onClickRight() {
	    this.$router.push("/search");
	  },
	 
	 
  }
}
</script>
<style scoped="scoped" lang="less">
	.cart{
		width: 100%;
		
		.van-nav-bar{
			background-color: #FFFFFF;
		}
		.content{
			margin: 50px 0;
			.van-card{
				background-color: #FFFFFF;
				margin:0.1rem 0;
				text-align: left;
			}
		}
	}
</style>