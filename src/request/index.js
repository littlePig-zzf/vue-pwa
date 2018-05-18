import axios from './axios'

let https = {
    /**
     * 验证
     * @param {*} res 
    */
    validResponed (res) {
        if (res.status !== 200 || res.statusText.toLowerCase() !== 'ok') {
            return Promise.reject(res.data);
        }
    },
	get (url, params = {}, success, error) {
        if (params) params._ = Date.parse(new Date());  // 设置请求不缓存
		axios.get(url, { params: params }).then( res => {
			if (success) success(res.data)
		}).catch( err => {
            errorf(err)
			if (error) error(err)
		})
	},
	post (url, params = {}, success, error) {
		axios.post(url, params).then( res => {
			if (success) success(res.data)
		}).catch( err => {
            errorf(err, 'post')
			if (error) error(err)
		})
	}
}

// 错误回调函数
function errorf (error, type) {
        // 断网提示
        if (error == 'Error: Network Error') {    
            bus.$vux.toast.show({
                type: 'text',
                text: '请检查网络连接',
                position: 'middle',
                width: '60%',
                isShowMask: true
            })
            return;
        }
        console.log(error);
        let data = error.response.data ? error.response.data : '';

        // 如果token为空或者token过期或者token错误
        if (data.code == 400 && (data.msg == "Token required" || data.msg == "No permission")) {
            console.log('token为空或者token过期或者token错误');
            if (mobile) getToken(type);
        } else if (data.code == 401 && data.msg == "Token not found") { // 如果token为空
            console.log('token为空');
            if (mobile) getToken(type);
        } else if (data.code == 400 && (data.msg == "No permission" || data.msg == "Token is null")) { // 如果token已过期或为空
            console.log('token已过期或为空');
            if (mobile) getToken(type);
        } else if (data.code == 401 && data.msg == "Invalid token or empty token") {
            console.log('无效的token，或token为空，或过期');
            if (mobile) getToken(type);
        } else {
            bus.$vux.toast.show({
                type: 'text',
                text: error.response.data.msg || error.response.data,
                position: 'top',
                width: '90%',
                time: 5000,
                isShowMask: true
            })
        }
    }

// 重新获取token
function getToken (type) {
    https.get('获取token', {}, (data) => {
        if (data.code == 200) {
            console.log('已静默获取token');
            localStorage.setItem('appToken', data.data.token);
            if (type == 'post') {
                https.post(url, params, success, error)
            } else if (type == 'get') {
                https.get(url, params = {}, success, error)
            }
        } else if (data.code == 400 && data.msg == "获取token失败") {
            console.log(data.msg + ',请检查是否存在 ' + mobile + ' 的手机号的用户');
            bus.$vux.toast.show({
                type: 'text',
                text: '获取身份验证token失败',
                position: 'middle',
                width: '60%'
            })
        }
    })
}

export default function () {
    let which, params, success, failure;
    if (typeof arguments[1] === "function") {  // 无参数的情况
        which = arguments[0];
        success = arguments[1];
        failure = arguments[2];
    } else {
        which = arguments[0];
        params = arguments[1];
        success = arguments[2];
        failure = arguments[3];
    }
	https[which.type](which.url, params, success, failure);
};
