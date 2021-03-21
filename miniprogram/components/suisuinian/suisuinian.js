// components/suisuinian/suisuinian.js
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
    mysuisuinian:[
      {
        content:"开工啦",
        time:'2020.3.21',
        by:"我的碎碎念",
        img:0
      },
      {
        content:"设想：留言板功能可供用户使用（需要加入限制字数功能），根据发布时间降序排列；有置顶功能；可根据拼音检索垃圾数据；如果查询不到用户可自己添加；",
        time:'2020.3.21',
        by:"我的碎碎念",
        img:1
      },
      {
        content:"设想：逻辑是这样的，用户首次进来就请求一次数据库把数据放到缓存，并放到data，以后再进来就不会请求数据库了（根据缓存里openid判断有没有进入过）， 但是后来可能要修改数据库，所以如果要修改需要把用户openid的缓存清掉",
        time:'2020.3.21',
        by:"我的碎碎念",
        img:2
      },
      {
        content:"搜索功能以后可能会加入实时功能（没点按钮就出结果） 需要学习一下防抖节流 要解决剩菜剩饭能搜到但是剩菜搜不到的情况",
        time:'2020.3.21',
        by:"我的碎碎念",
        img:2
      },
      {
        content:"考虑增加搜索历史功能和热门搜索功能",
        time:'2020.3.21',
        by:"我的碎碎念",
        img:2
      },
    ],
    imgsrc:[
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201903%2F03%2F20190303071148_jsqvb.thumb.700_0.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618845098&t=bf57f8260c7144cae407960ae3191394",
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2585218782,3153586624&fm=26&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1220786979,3455088373&fm=26&gp=0.jpg"
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
