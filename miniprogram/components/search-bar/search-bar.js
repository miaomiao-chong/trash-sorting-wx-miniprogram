// components/search-bar/search-bar.js
let inputValue=''
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
    handleInput(e){
      // console.log(e);
    
      inputValue=e.detail.value
    },
    onSearch(){
      // console.log("触发了onsearch");
      // console.log(inputValue);
      if(inputValue.trim()==''){
        console.log("空字符串");
        wx.showToast({
          title: '输点东西吧',
          icon:"none"
        })
        return
      }else{
        this.triggerEvent("inputValue",inputValue.trim())
      }
     
     console.log("search组件执行了一次");
    }
  },

})
