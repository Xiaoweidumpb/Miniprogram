// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

const db=cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  var openid=event.openid
  try {
    return await db.collection('favorite').aggregate().lookup({
      from:'news',
      localField:'article_id',
      foreignField:'_id',
      as:'data'
    }).match({
      openid:openid
    }).end()
  } catch (e) {
    console.error(e)
  }
}