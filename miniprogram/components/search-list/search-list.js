// components/search-list/search-list.js
let result=''
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Object
    }
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
    gotoDetail(e){
      console.log(e);
      console.log("执行了一次");
      result=e.currentTarget.dataset.item
      console.log(result);
      this.goto(JSON.stringify(result))
    },
    goto(result) {
      wx.navigateTo({
        url: `../detail/detail?value=${result}`,
      })
    },
  }
})
