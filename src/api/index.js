import  axios from 'axios'
import './mockdata.js'
axios.defaults.baseURL = 'http://520mg.com';

let DatailAPI= data=>{
	return axios.get("https:www.hhh.php",{params:{
		id:data.id
	}})
}

// 短信接口
let sendAPI=data=>{
	return axios.post("/mi/send.php",data)
}

//登录
let loginAPI=data=>{
	return axios.post("/member/ajax_login.php",data)
}


export {DatailAPI,
		sendAPI,
		loginAPI
}