var mta = require('./mta_analysis.js');
import config from './config'
const count = {
  cancelApp(id){
    switch(id){
      case config.appId1: mta.Event.stat("cancel_xws", {"desc":"享物说"});break;
      case config.appId2: mta.Event.stat("cancel_yngxxc", {"desc":"忆年共享相册"});break;
      case config.appId3: mta.Event.stat("cancel_zzbsh", {"desc":"转转步数换"});break;
      case config.appId4: mta.Event.stat("cancel_zzhls", {"desc":"转转欢乐送"});break;
      case config.appId5: mta.Event.stat("cancel_ftxxn", {"desc":"飞天小小鸟"});break;
      default: mta.Event.stat("MiniProgramError", {"desc":"小程序出错！"});break;
    }
  },
  accessApp(id){
    switch(id){
      case config.appId1: mta.Event.stat("access_xws", {"desc":"享物说"});break;
      case config.appId2: mta.Event.stat("access_yngxxc", {"desc":"忆年共享相册"});break;
      case config.appId3: mta.Event.stat("access_zzbsh", {"desc":"转转步数换"});break;
      case config.appId4: mta.Event.stat("access_zzhls", {"desc":"转转欢乐送"});break;
      case config.appId5: mta.Event.stat("access_ftxxn", {"desc":"飞天小小鸟"});break;
      default: mta.Event.stat("MiniProgramError", {"desc":"小程序出错！"});break;
    }
  },
  completeApp(id){
    switch(id){
      case config.appId1: mta.Event.stat("count_xws", {"desc":"享物说"});break;
      case config.appId2: mta.Event.stat("count_yngxxc", {"desc":"忆年共享相册"});break;
      case config.appId3: mta.Event.stat("count_zzbsh", {"desc":"转转步数换"});break;
      case config.appId4: mta.Event.stat("count_zzhls", {"desc":"转转欢乐送"});break;
      case config.appId5: mta.Event.stat("count_ftxxn", {"desc":"飞天小小鸟"});break;
      default: mta.Event.stat("MiniProgramError", {"desc":"小程序出错！"});break;
    }
  },
  finishApp(id){
    switch(id){
      case config.appId1: mta.Event.stat("finish_xws", {"desc":"享物说"});break;
      case config.appId2: mta.Event.stat("finish_yngxxc", {"desc":"忆年共享相册"});break;
      case config.appId3: mta.Event.stat("finish_zzbsh", {"desc":"转转步数换"});break;
      case config.appId4: mta.Event.stat("finish_zzhls", {"desc":"转转欢乐送"});break;
      case config.appId5: mta.Event.stat("finish_ftxxn", {"desc":"飞天小小鸟"});break;
      default: mta.Event.stat("MiniProgramError", {"desc":"小程序出错！"});break;
    }
  },
  failApp(id){
    switch(id){
      case config.appId1: mta.Event.stat("fail_xws", {"desc":"享物说"});break;
      case config.appId2: mta.Event.stat("fail_yngxxc", {"desc":"忆年共享相册"});break;
      case config.appId3: mta.Event.stat("fail_zzbsh", {"desc":"转转步数换"});break;
      case config.appId4: mta.Event.stat("fail_zzhls", {"desc":"转转欢乐送"});break;
      case config.appId5: mta.Event.stat("fail_ftxxn", {"desc":"飞天小小鸟"});break;
      default: mta.Event.stat("MiniProgramError", {"desc":"小程序出错！"});break;
    }
  }
};
export default count;
