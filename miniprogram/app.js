wx.cloud.init({
  traceUser: true,
  env: 'garbage-9gq2esk2d1ffbbc6'
}),
App({
  globalData:{
    openid:-1
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    this.getOpenid()
  },
  getOpenid(){
    wx.cloud.callFunction({
      name:"openid"
    }).then((res)=>{
      // console.log(res);
      let openid=res.result.openid
      this.globalData.openid=openid
      let musicHistory=wx.getStorageSync(openid)
      // if(musicHistory!==''){
      //   console.log("have");
      // }
      if(musicHistory===''){
        //以前没有放到缓存过 就把他初始化一下 以前初始化过就不执行
        console.log("初始化了一下");
        wx.setStorageSync(openid, [])
      }
    })
  }
})
