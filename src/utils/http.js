/*
 * @Author: lijinrong
 * @Date: 2020-04-16 21:07:51
 * @LastEditors: lijinrong
 * @LastEditTime: 2020-04-17 18:25:39
 * @Description: file content
 */
import axios from 'axios'
import config from '../etc/config'

// const Context = 'http://127.0.0.1:5301'

axios.defaults.timeout = 5000 //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8' //配置请求头
axios.defaults.baseURL = '' //配置接口地址

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
    (res) => {
        //对响应数据做些事
        if (res.status === 403) {
            return Promise.reject('您无权限访问，请重新登录.')
        } else if (res.status === 401) {
            return Promise.reject('当前会话已过期，请重新登录.')
        } else {
            return res
        }
    },
    (error) => {
        return Promise.reject(error)
    }
)

//返回一个Promise(发送post请求)
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(config.api_url + url, params)
            .then(
                (response) => {
                    resolve(response.data)
                },
                (err) => {
                    reject(err)
                }
            )
            .catch((error) => {
                reject(error)
            })
    })
}
////返回一个Promise(发送get请求)
export function get(url, param) {
    return new Promise((resolve, reject) => {
        axios
            .get(config.api_url + url, { params: param })
            .then(
                (response) => {
                    resolve(response.data)
                },
                (err) => {
                    reject(err)
                }
            )
            .catch((error) => {
                reject(error)
            })
    })
}
export default {
    post,
    get,
}
