import axios from 'axios'
import Cookies from 'js-cookie'
import { Message } from 'element-ui';
var instanceAxios = axios.create()
const that = this;
instanceAxios.interceptors.request.use(
    res => {
        res.headers["token"] = Cookies.get('member')
        return res
    },
    err => {
        // 这里显示网络异常
        return Promise.reject(err)
    },
)

// Add a response interceptor
instanceAxios.interceptors.response.use(
    res => {
        let resData = res.data
        return resData

    },
    err => {
        // 这里显示网络异常
        return {
            code: 404,
            msg: '服务端挂了',
        }
    },
)

instanceAxios.defaults.withCredentials = true
instanceAxios.defaults.timeout = 115000
export default instanceAxios
