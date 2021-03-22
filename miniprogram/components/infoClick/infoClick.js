// components/infoClick/infoClick.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotodetail(e){
      console.log(e.currentTarget.dataset.kind);
      let kind=e.currentTarget.dataset.kind
      wx.navigateTo({
        url:  `../allList/allList?kind=${kind}`,
      })
    }
  }
})
