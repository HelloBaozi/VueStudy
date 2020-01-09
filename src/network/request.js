import axios from 'axios'
export default function request(config) {
  //1. 创建实例
  const axiosInstance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  });

  //2. 拦截器进行拦截
  //2.1 对请求进行拦截
  axiosInstance.interceptors.request.use(config => {
    //请求成功时调用

    //拦截完放行
    return config

  }, error => {
    //进行请求错误处理
  })

    //2.2 对响应结果进行拦截
  axiosInstance.interceptors.response.use(res => {
    //拦截完放行
    return res.data
  }, error => {
    //进行响应错误处理
  })

  //3. 发起请求
  return axiosInstance(config)
}

