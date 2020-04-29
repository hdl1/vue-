import  axios from 'axios'
import './mockdata.js'


let DatailAPI= data=>{
	return axios.get("https:www.hhh.php",{params:{
		id:data.id
	}})
}

// 短信接口
let sendAPI=data=>{
	return axios.post("www.hdl/send.php",data)
}

//登录
let loginAPI=data=>{
	return axios.post("https:www.hdl.php",data)
}


export {DatailAPI,
		sendAPI,
		loginAPI
}