import axios, { AxiosRequestConfig } from 'axios'
import NProgress from 'nprogress'

//设置请求头和请求路径
axios.default.baseURL = '/api'
axios.default.timeout = 10000
axios.default.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
//请求拦截
axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      config.headers.toke = token
    }
    return config
  },
  (error) => {
    return error
  }
)
//响应拦截
axios.interceptors.response.use((res) => {
  if (res.code === 111) {
    sessionStorage.setItem('token', '')
  }
  //后面可以加很多种情况
  return res
})

interface ResType<T> {
  code: number
  data?: T
  msg: string
  error?: string
}

interface Http {
  get<T>(url: string, params?: unknow): Promise<ResType<T>>
  post<T>(url: string, params?: unknow): Promise<ResType<T>>
  upload<T>(url: string, params?: unknow): Promise<ResType<T>>
  download<T>(url: string, params?: unknow): Promise<ResType<T>>
}

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((error) => {
          NProgress.done()
          reject(error.data)
        })
    })
  },

  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },

  upload(url, file) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, file, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },

  download(url) {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    iframe.onload = function () {
      document.body.removeChild(iframe)
    }
    document.body.appendChild(iframe)
  },
}

export default http
