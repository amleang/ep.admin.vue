import axios from 'axios'
import Cookies from 'js-cookie'
import { Message, Loading } from 'element-ui';
var instanceAxios = axios.create()
const that = this;
let loadingInstance = null;
instanceAxios.interceptors.request.use(
    res => {
        loadingInstance = Loading.service({
            lock: true,
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
        });
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
        setTimeout(() => {
            loadingInstance.close();
        }, 500);
        let resData = res.data;
        if (resData.code == 200) {
            return resData
        }
        else {
            if (resData.code == 1003) {
                Message.error(resData.msg);
                setTimeout(() => {
                    location.href = "#/login";
                }, 2500);
            }
            else {
                Message.error(resData.msg)
            }
            return resData;
        }


    },
    err => {
        setTimeout(() => {
            loadingInstance.close();
        }, 500);
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
