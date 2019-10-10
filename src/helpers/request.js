import axios from 'axios'
// 给请求失败提供 Message
import { Message } from 'element-ui'

// base路径为 后端接口线上地址根路径
axios.defaults.baseURL = 'https://blog-server.hunger-valley.com'; 
// 默认 POST 请求
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 允许跨域
axios.defaults.withCredentials = true;

export default function request(url,type = 'GET',data = {}){
    return new Promise((resolve,reject) =>{
        let option = {
            url,
            method: type
        }
        // 若 type(小写)是 get 则 params(axios默认) 为 data
        if(type.toLowerCase() ==='get'){
            option.params = data
        }else {
            option.data = data
        }
        axios(option).then(res => {
            // console.log(res.data)
            if(res.data.status === 'ok'){
                resolve(res.data)
            }else{
                Message.error(res.data.msg)
                reject(res.data)
            }
        }).catch(err=>{
            Message.error('网络异常')
            reject({ msg:'网络异常' })
        })
    })
}