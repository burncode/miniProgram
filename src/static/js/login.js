import wepy from 'wepy';
import {$http} from './http'
import {jsonlint} from './jsonlint.js';
function userLogin(e,callback){
  let user = e.detail;
  function wxLogin(wxres){
    return new Promise((resolve,reject)=>{
      $http("/wechat_mp/login","POST",{code:wxres.code},{Appid: "grtaskwall",Fuid:wepy.getStorageSync("fuid"),Chnid:wepy.getStorageSync("chn_id")},(res)=>{
        wepy.setStorageSync("third_Session", res.header['Set-Cookie']);
        wepy.setStorageSync("loginOk", true);
        resolve();
      })
    })
  }
  function setUserInfo(){
    return new Promise((resolve,reject)=>{
      $http("/wechat_mp/set_user_info","POST",{ wxuserinforsp:JSON.stringify(user)},{Appid: "grtaskwall","Cookie": wepy.getStorageSync("third_Session")},(res)=>{
        resolve();
      })
    })

  }
  function getUserInfo(){
    return new Promise((resolve,reject)=>{
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
          wepy.setStorageSync("chn_id",obj.user.extra_info.chn_id.toString());
          wepy.hideToast();
          resolve();
        }
      });
    }).then(()=>{
      callback();
    });

  }
  async function login(wxres){
    await wxLogin(wxres);
    await setUserInfo();
    await getUserInfo();
  }
  //微信登入接口
  wepy.login({
    //用户登入成功
    success(res){
      wepy.showToast({
        title: '登入中...',
        icon: 'loading'
      });
      //授权成功，成功获取用户的code
      if(res.code){
        //请求封装好的登入接口
       login(res);
      }else{
        //获取code失败
      }
    },
    //用户登入失败
    fail(res){

    }
  });
}
export default userLogin;


