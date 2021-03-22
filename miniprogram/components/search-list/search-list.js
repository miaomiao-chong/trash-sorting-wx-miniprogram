// components/search-list/search-list.js
//在这里处理有数据的情况，没数据的在index页面处理
let result=''
let ishave=false
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
    ishave:true
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
      console.log(this.data.list);
      this.goto(JSON.stringify(result),true)
    },
    goto(result,ishave) {
      wx.navigateTo({
        url: `../detail/detail?value=${result}&ishave=${ishave}`,
      })
    },
  }
})
