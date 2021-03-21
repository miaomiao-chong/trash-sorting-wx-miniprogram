// components/list/list.js
Component({
  /**
   * 组件的属性列表
   */

  properties: {
    kind:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    open:false
  },

  lifetimes:{
    ready(){
      this.getstorage()
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getstorage(){
      wx.getStorage({
        key: "data",
      }).then((res)=>{
        this.setData({
          list:res.data[this.properties.kind]
        })
      })
    },
    open(){
      this.setData({
        open:!this.data.open
      })
      console.log(this.data.open);
    }
  }
})
