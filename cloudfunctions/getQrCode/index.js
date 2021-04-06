const cloud = require('wx-server-sdk')
cloud.init({ 
  traceUser: true,
  env: 'garbage-9gq2esk2d1ffbbc6'
})
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  try {
    const result = await cloud.openapi.wxacode.getUnlimited({
        scene: wxContext.OPENID
      })
    console.log(result);
    let upload=await cloud.uploadFile({
      cloudPath:"QrCode/"+Date.now()+'-'+Math.random()+'png',
      fileContent:result.buffer
    })
    return upload.fileID

  } catch (err) {
    return err
  }
}