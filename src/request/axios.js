import axios from 'axios';
import { SERVER_URL } from './api';
import bus from '../assets/js/bus'

// import  { ToastPlugin } from 'vux';

// Vue.use(ToastPlugin);
// import { Storage } from 'commons/js/utils';
// import router from "../router";

axios.defaults.baseURL = SERVER_URL; // 设置默认服务地址
axios.defaults.timeout = 0;// 不设置超时时长

// http请求拦截器
axios.interceptors.request.use(config => {
    config.headers.Authorization = '4c588f1f2947d61abf907465cf11dc6c15f0a861b70a424999741c8613f010db';
    return config;
}, error => {
    bus.$vux.toast.show({
        type: 'text',
        text: '网络出错',
        position: 'middle',
        width: '60%',
        isShowMask: true
    })
    return Promise.reject(error);
});

var is401 = false;

// http响应拦截器
axios.interceptors.response.use(res => {
    return res;
}, error => {
    bus.$vux.toast.show({
        type: 'text',
        text: '服务器出错',
        position: 'middle',
        width: '60%',
        isShowMask: true
    })
    return Promise.reject(error);
});

export default axios;
