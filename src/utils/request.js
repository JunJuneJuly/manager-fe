import axios from "axios";
import config from './../config'
import {ElMessage} from 'element-plus'
import router from './../router'
/* 
* axios二次封装
*/
const TOKEN_INVALID = 'TOKEN 认证失败'
const service = axios.create({
  baseURL: config.baseApi,
  timeout:8000
})

service.interceptors.request.use((req)=>{
  //TO-DO
  const headers = req.headers;
  if(!headers.Authorization) headers.Authorization = 'Bear Jack'
  return req
})

service.interceptors.response.use((res)=>{
  const {code,data,msg} = res.data
  if(code === 200){
    return data;
  }else if(code === 40001){
    ElMessage.error(TOKEN_INVALID)
    /* 
    * 跳转登录页面
     */
    setTimeout(()=>{
      router.push('/login')
    },1500)
    return Promise.reject(TOKEN_INVALID)
  }else{
    ElMessage.error(msg || '网络异常')
    return Promise.reject(msg || '网络异常')
  }
})
/* 
* 请求核心函数
* @param {*} options 请求配置
*/
function request(options){
  options.method = options.method || 'get'
  if(options.method.toLowerCase() === 'get'){
    options.params = options.data;
  }
  if(config.env === 'prod'){
    service.defaults.baseURL = config.baseApi
  }else{
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi;
  }
  return service(options)
}
['get','post','put','delete','patch'].forEach((item)=>{
  request[item] = (url,data,options)=>{
    return request({
      url,
      data,
      method:item,
      ...options
    })
  }
})
export default request;