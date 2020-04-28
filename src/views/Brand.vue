<template>
  <div class="brand">
	  <div class="top">
		  所有品牌
	  </div>
	  
    <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell v-for="(item,index) in listA" :title="item"  :key="index"/>
      <van-index-anchor index="B" />
      <van-cell v-for="(item,ind) in listB" :title="item" :key="ind"/>
	  <van-index-anchor index="C" />
	  <van-cell v-for="(item,ind) in listC" :title="item" :key="ind"/>
    </van-index-bar>
  </div>
</template>
<script>
	export default{
		data(){
			return{
				listA:['Abercrombie & Fitch','Abril Et Nature','Acca Kappa','ACQUA DI PARMA'],
				listB:['babaria','Babaria','BaByliss PRO','Barnängen','benefit'],
				listC:['Cabaria','Cabaria','CaByliss PRO','Carnängen','Cenefit'],
			}
		}
	}
</script>
<style lang="less" scoped="scoped">
	.brand{
		
		.top{
			height: .86rem;
			line-height: .86rem;
			text-indent: .2rem;
			font-size: .28rem;
			color: #333;
			border-bottom: 1px solid #e8e8e8;
			background-color: #FFFFFF;
			
		}
	}
</style>