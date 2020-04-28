import mock from 'mockjs'
import  {total} from '../data/index.js'
mock.mock("https:www.hhh.php",function(){
	let total=[Datas,Face,Cz,Mf,Bath,Man,Accessories];
	let res=[];
	total.forEach(item=>{
		item.forEach(it=>{
			res=it
		})
		
	})
	return res
	console.log(res)
	
})

mock.mock("http://520mg.com/mi/send.php",function(){
	let result={
		"code":0,
		"token":"dhsjhfjfj;dfjfhjhg;dsffcdf;",
		"return":"ok",
	}
	return result
})
export {mock}