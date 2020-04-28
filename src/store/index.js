import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  	  goodslist:[
	  		  {
	  		  	goodid:"49740" ,
	  		  	name:" LANCOME 兰蔻 清滢柔肤水 粉水 干性肌肤 400ml ",
	  		  	price:30,
	  		  	num:5,
	  		  	desc:" 干皮救星 滋润提亮",
	  		  	image:"https://pb-assets.azoyacdn.com/media/catalog/product/1/3/13805_2.jpg",
	  		  },
	  		  ],
  },
  getters:{
  	 getgoodslist(state){
  	  return state.goodslist;
  	 }
  },
  mutations: {
	  // 增加购物车
	  addCar(state,good){
	  		  let add=true
	  		  state.goodslist.forEach((item,index)=>{
	  			  if(item.goodid==good.goodid&&item.skuid==good.skuid){
	  					  item.num+=good.num
	  					    add=false; 
	  			  }
	  			 
	  		  })
	  		  if(add){
	  		  	 state.goodslist.push(good);
	  		  }
	  },
	  //移除
	  remove(state,good){
	  		  let index = -1;
	  		  state.goodslist.forEach((item,i)=>{
	  			  if(item.goodid==good.id){
	  				  index = i;
	  			  }
	  		  })
	  		  if(index>=0){
	  			  state.goodslist.splice(index,1)
	  		  }
	  		  
	  },
	  changeNum(state,good){
	  		  state.goodslist.forEach((item,index)=>{
	  			  if(item.goodid==good.id){
					  if(good.num<=0){
						  item.num=1
					  }else if(good.num>=5){
						   item.num=5
					  }else{
						 item.num=good.num 
					  }
	  				  
	  			  }
	  		  })
	  }
  },
  actions: {
	  //异步加入购物车
	  addAsync(context,good){
	  		  context.commit("addCar",good);
	  },
	  removeAsync(context,good){
	  		  context.commit("remove",good)
	  },
	  changeNumAsync(context,good){
	  		   context.commit("changeNum",good)
	  }
	 
  },
  modules: {
  }
})
