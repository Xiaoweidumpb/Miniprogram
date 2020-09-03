// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

const db=cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  console.log(event.openid)
  try{
    return await db.collection('favorite').where({
      openid:event.openid
    }).where({
      article_id:event.article_id
    }).remove()
  }catch(e){
    console.error(e)
  }
  return {
    event,
    openid: wxContext.OPENID,
  }
}