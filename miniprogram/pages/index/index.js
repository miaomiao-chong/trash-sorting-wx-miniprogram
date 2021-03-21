// miniprogram/pages/index/index.js
//1 厨余垃圾
//2 其他垃圾
//3 可回收垃圾
//4 有害垃圾
const app = getApp()
const openid = app.globalData.openid

wx.cloud.init({
  traceUser: true,
  env: 'garbage-9gq2esk2d1ffbbc6'
})
let value = '' //输入内容
let data = [] //搜索数据用
let ishave = "false" //判断有没有找到
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: ''
  },
  onLoad() {
    this.getOpenid()
  },

  getOpenid() {
    wx.cloud.callFunction({
      name: "openid"
    }).then((res) => {
      // console.log(res);
      let openid = res.result.openid
      // this.data.openid = openid
      this.setData({
        openid
      })
      let result = wx.getStorageSync(openid)

      if (result === '') {
        //以前没有放到缓存过 就把他初始化一下 
        //并且把list数据放到缓存 
        //并取出来放到data
        console.log("初始化了一下");
        this.setlist()
        wx.setStorageSync(openid, [])
      }else{
        //以前放到缓存过就取出来放data里面
        this.getlist()
      }
      //为什么要这样做呢，请求数据库需要消耗次数，
      //我们把数据放到缓存里，用到取出来就不用请求数据库了
      //只需第一次登录的时候请求一下就行了
    })


  },

  setlist() {
    wx.cloud.callFunction({
      name: "getData"
    }).then((res) => {
      wx.setStorageSync('data', res.result.data[0].data)
      console.log("set");
      this.getlist()
    })
  },
  getlist() {
    let a = wx.getStorageSync('data')
    console.log("get");
    console.log(a);
    this.setData({
      list: a
    })
    data=a
  },


  //搜索内容获取
  handleInput(e) {
    console.log('成功点击了');
    console.log(e.detail);
    value = e.detail
    this.setData({
      value: e.detail
    })
    // console.log(data);
    this.jiansuo()
    console.log("datassm" + data);
  },
  // 检索
  jiansuo() {
    ishave=false
    console.log(data[1]);
    // console.log("datassm" + data);
    let that = this
    let x = 0
    let y = 0
    wx.showLoading({
      title: '加载中',
    })
    let result = []
    //疑问 如何用正则匹配变量
    for (let i = 1; i < 5; i++) {
      // console.log("i=",i);
      for (let j = 0; j < data[i].length; j++) {
        // console.log(data[i].length);
        // console.log("j=",j);
        if (data[i][j].n == this.data.value) {
          ishave = "true"
          x = i
          y = j
          console.log("找到了");
          break
        }
      }
      if (ishave == "true") {
        break
      }
    }
    if (ishave == "true") {
      console.log("找到了");
      result = data[x][y]

    } else {
      console.log("没找到");
    }
    wx.hideLoading()
    // console.log(result);
    this.gotoDetail(JSON.stringify(result))


  },

  gotoDetail(result) {
    wx.navigateTo({
      url: `../detail/detail?value=${result}&ishave=${ishave}`,
    })
  },
  gotomore() {
    wx.navigateTo({
      url: '../other/other',
    })
  }
})