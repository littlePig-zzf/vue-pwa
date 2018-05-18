import axios from 'axios'
import api from '@/request/api'

export default function wxConfig () {
  // top.location.href 顶级窗口的地址
  // this.location.href 当前窗口的地址
  var val = top.location.href;
  axios.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx88aae9c974a523e0&secret=f84abefdee07a7c8282da8353495ead4')
    .then(function (result) {
      console.log("config--------------------------");
      console.log(val);
      console.log("config+++++++++++++++++");
      if (result.status == 200) {
          Vue.wechat.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: result.data.appid, // 必填，公众号的唯一标识
          timestamp: result.data.timestamp, // 必填，生成签名的时间戳
          nonceStr: result.data.nonceStr, // 必填，生成签名的随机串
          signature: result.data.signature, // 必填，签名，见附录1
          // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          jsApiList: [
            "chooseImage",
            "uploadImage",
            "onMenuShareAppMessage",  // 分享给朋友
            "onMenuShareTimeline",  // 分享到朋友圈
            "onMenuShareQQ",  // 分享到QQ
            "hideMenuItems",  // 隐藏
            "onMenuShareWeibo",  // 分享到腾讯微博
            "onMenuShareQZone",  // 分享到QQ空间
            "getLocation",
            "openLocation",
            "previewImage"
          ]
        });
      }
      console.log(result);
    }).catch((result) => {
      console.log(result);
    });
  // http://app.xiulianzone.com/api/wechat/getSignPack
}
