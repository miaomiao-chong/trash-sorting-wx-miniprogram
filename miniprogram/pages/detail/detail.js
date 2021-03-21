// miniprogram/pages/detail/detail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    ishave: true,


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    if (options.ishave === "true") {
      // console.log("为true");
      this.setData({
        ishave: true
      })
    } else {
      // console.log("为false");
      this.setData({
        ishave: false
      })
    }
    this.setData({
      value: JSON.parse(options.value)
    })
    this.className()

    this.setData({
      urls: app.globalData.urls
    })
  },
  className() {
    let num = parseInt(this.data.value["c"])
    console.log(num);
    console.log("aaa");
    let classname = 'class'
    // debugger
    switch (num) {
      case 1:
        classname = "chuyu";
        break
      case 2:
        classname = "qita";
        break;
      case 3:
        classname = "kehuishou";
        break;
      case 4:
        classname = "youhai";
        break;
    }
    console.log(classname);
    this.setData({
      ["value.classname"]: classname
    })
  },
  gotoAllList() {
    wx.navigateTo({
      url: `../allList/allList?kind=${this.data.value.c}`,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})