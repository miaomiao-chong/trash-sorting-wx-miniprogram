wx.cloud.init({
  traceUser: true,
  env: 'garbage-9gq2esk2d1ffbbc6'
}),
App({
  globalData:{
    openid:-1,
    urls: [{
      url: "https://hbimg.huabanimg.com/b80faebafec5eaaa2c429ef5d8631b73beb01a4129f0-i8Cw3U_fw658/format/webp",
      content: "厨余垃圾",
      desc:"厨余垃圾含有极高的水分与有机物，很容易腐坏，产生恶臭。经过妥善处理和加工，可转化为新的资源，高有机物含量的特点使其经过严格处理后可作为肥料、饲料，也可产生沼气用作燃料或发电，油脂部分则可用于制备生物燃料。"
    },
    {
      url: "https://hbimg.huabanimg.com/246f8fc7afec17c2c47fd24a2244a33915610e403e49-IwoYGb_fw658/format/webp",
      content: "其他垃圾",
      desc:"其他垃圾包括砖瓦陶瓷、渣土、卫生间废纸、瓷器碎片、动物排泄物、一次性用品等难以回收的废弃物，采取卫生填埋可有效减少对地下水、地表水、土壤及空气的污染。到目前为止，人类暂时还没有有效化解其他垃圾的好方法，所以要尽量少产生。"
    }, {
      url: "https://hbimg.huabanimg.com/d28c2316047c9bd5094ac57716b496b837518c582a62-AQYONU_fw658/format/webp",
      content: "可回收垃圾",
      desc:"可回收物指适宜回收利用和资源化利用的生活废弃物。可回收物主要品种包括：废纸、废塑料、废金属、废包装物、废旧纺织物、废弃电器电子产品、废玻璃、废纸塑铝复合包装等。"
    }, {
      url: "https://hbimg.huabanimg.com/ccd81b30179edd68d51052aca37f71342c07c5d81b04-jCVO0v_fw658/format/webp",
      content: "有害垃圾",
      desc:'有害垃圾指对人体健康或者自然环境造成直接或者潜在危害的生活废弃物。常见的有害垃圾包括废灯管、废油漆、杀虫剂、废弃化妆品、过期药品、废电池、废灯泡、废水银温度计等，有害垃圾需按照特殊正确的方法安全处理。'
    }
  ]
  },

  // onShow: function () {
  //   this.getOpenid()
  // },
  // getOpenid(){
  //   wx.cloud.callFunction({
  //     name:"openid"
  //   }).then((res)=>{
  //     // console.log(res);
  //     let openid=res.result.openid
  //     this.globalData.openid=openid
  //     let history=wx.getStorageSync(openid)
  //     // if(musicHistory!==''){
  //     //   console.log("have");
  //     // }
  //     if(history===''){
  //       //以前没有放到缓存过 就把他初始化一下 以前初始化过就不执行
  //       console.log("初始化了一下");
  //       wx.setStorageSync(openid, [])
  //     }
  //   })
  // }
})
