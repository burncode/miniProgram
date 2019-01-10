import wepy from 'wepy'
/**wx.request服务封装 */
import {jsonlint} from './jsonlint.js'
function $http(url,type,data,header,success){
  let baseUrl = "https://ps.gzguru.com";
  wepy.request({
    url:`${baseUrl}${url}`,
    method:type,
    data:data,
    header:header,
    success(res){
      if(res.data.result==1){
        success(res)
      }else if(res.data.result==0){
        wepy.showModal({
          title: '提示',
          content: '系统错误！',
          showCancel: false,
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        });
      }else if(res.data.result==500001){
        wepy.login({
          success(res){
            //授权成功
            if(res.code){
              //请求登入接口
              let myCode = res.code;
              wepy.getUserInfo({
                success: function(res) {
                  let user = res;
                  $http("/wechat_mp/login","POST",{code:myCode},{Appid: "grtaskwall",Fuid:wepy.getStorageSync("fuid")},function(res){
                    console.log("登入set-cookie123");
                    wepy.setStorageSync("third_Session", res.header['Set-Cookie']);
                    $http("/wechat_mp/set_user_info","POST",{ wxuserinforsp:JSON.stringify(user)},{Appid: "grtaskwall","Cookie": wepy.getStorageSync("third_Session")},function(res){
                      wepy.request({
                        url:"https://ps.gzguru.com/get_user_info",
                        method:"POST",
                        dataType:"text",
                        data:{},
                        header:{'content-type': 'text/plain',Appid: "grtaskwall","Cookie": wepy.getStorageSync("third_Session")},
                        responseType :'text',
                        success(res){
                          let obj = jsonlint.parse(res.data);
                          wepy.setStorageSync("uid",obj.user.uid);
                        }
                      });

                    });
                  })
                }
              })

            }else{
              console.log("获取code失败！")
            }
          },
          fail(res){
            console.log("用户登入授权失败！失败原因：")
            console.log(res);
          }
        });
      }

    }
  });
}
module.exports = {
  $http:$http
}
