// miniprogram/pages/detail/detail.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // value:'',
    // ishave: true,
    // value: {
    //   n: "电脑",
    //   c: 4,
    //   a: "计算机",
    //   i: "dn"
    // },
    // urls: [{
    //     url: "https://hbimg.huabanimg.com/b80faebafec5eaaa2c429ef5d8631b73beb01a4129f0-i8Cw3U_fw658/format/webp",
    //     content: "厨余垃圾",
    //     desc:"厨余垃圾含有极高的水分与有机物，很容易腐坏，产生恶臭。经过妥善处理和加工，可转化为新的资源，高有机物含量的特点使其经过严格处理后可作为肥料、饲料，也可产生沼气用作燃料或发电，油脂部分则可用于制备生物燃料。"
    //   },
    //   {
    //     url: "https://hbimg.huabanimg.com/246f8fc7afec17c2c47fd24a2244a33915610e403e49-IwoYGb_fw658/format/webp",
    //     content: "其他垃圾",
    //     desc:"其他垃圾包括砖瓦陶瓷、渣土、卫生间废纸、瓷器碎片、动物排泄物、一次性用品等难以回收的废弃物，采取卫生填埋可有效减少对地下水、地表水、土壤及空气的污染。到目前为止，人类暂时还没有有效化解其他垃圾的好方法，所以要尽量少产生。"
    //   }, {
    //     url: "https://hbimg.huabanimg.com/d28c2316047c9bd5094ac57716b496b837518c582a62-AQYONU_fw658/format/webp",
    //     content: "可回收垃圾"
    //   }, {
    //     url: "https://hbimg.huabanimg.com/ccd81b30179edd68d51052aca37f71342c07c5d81b04-jCVO0v_fw658/format/webp",
    //     content: "有害垃圾"
    //   }
    // ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
     ishave:options.ishave,
     value:JSON.parse (options.value)
    })
    this.className()

    this.setData({
      urls:app.globalData.urls
    })
  },
  className() {
    let num = this.data.value["c"]
    // console.log(num);
    let classname = ''
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