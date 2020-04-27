import  axios from 'axios'
import './mockdata.js'
let DatailAPI= data=>{
	return axios.get("https:www.hhh.php",{params:{
		id:data.id
	}})
}

export {DatailAPI}