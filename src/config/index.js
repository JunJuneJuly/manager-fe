/* 
* 环境配置封装
*/
const env = import.meta.env.MODE || 'prod';//获取环境变量
const EnvConfig = {
  development:{
    baseApi:'/',
    mockApi:'https://www.fastmock.site/mock/50ad19966007072d1073deec3b213bdf/api'
  },
  test:{
    baseApi:'//test.futurefe.com/api',
    mockApi:'https://www.fastmock.site/mock/50ad19966007072d1073deec3b213bdf/api'
  },
  prod:{
    baseApi:'//futurefe.com/api',
    mockApi:''
  }
}
export default {
  env,
  mock: true,
  namespace:'manager',
  ...EnvConfig[env]
}