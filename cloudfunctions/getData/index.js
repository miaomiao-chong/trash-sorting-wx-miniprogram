// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({ 
  traceUser: true,
  env: 'garbage-9gq2esk2d1ffbbc6'
})
const db=cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  return db.collection('data').get().then((res)=>{
    // console.log(res); 
    return res 
  })
}