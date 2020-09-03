const DB = wx.cloud.database().collection('news');
const DB_favorite = wx.cloud.database().collection('favorite');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAdd:false,
  },
  queryFavorite:function(id){
    var that=this
    let openid=""
    let article_id = id;
    wx.cloud.callFunction({
      name: "getopenid",
      success(res) {
        openid=res.result.openid
        DB_favorite.where({
          openid:openid,
          article_id:article_id
        }).get({
          success(res){
            if(res.data.length==1){
            that.setData({
              isAdd:true,
            })
          }
          }
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.queryFavorite(options.id)
    let id = options.id;
    //根据新闻id在云数据库查找新闻
    //doc唯一查询
    DB.doc(id).get({
      success: res => {
        //更新页面上的新闻信息和收藏状态
        this.setData({
          article: res.data
        })
      }
    })
  },
 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //添加收藏
  addFavorites: function () {
    if(!this.isAdd){
    let article_id = this.data.article._id;
    wx.cloud.callFunction({
      name: "getopenid",
      success(res) {
        //console.log("获取用户id成功",res.result.openid)
        DB_favorite.add({
          data: {
            openid: res.result.openid,
            article_id: article_id
          },
        })
      }
    })
    this.setData({
      isAdd:true
    })
  }
  
  },
  //取消收藏
  cancelFavorita: function () {
    if(!this.isAdd){
    let openid=""
    let article_id = this.data.article._id;
    wx.cloud.callFunction({
      name: "getopenid",
      success(res) {
        openid=res.result.openid
        //console.log("openid",openid)
        wx.cloud.callFunction({
          name:"deleFavorite",
          data:{
            openid:openid,
            article_id:article_id
          },
        success(res){
          console.log(res)
        },
        fail(res){
          console.log("失败",res)
        }
        })
      }
    })
    this.setData({
      isAdd:false
    })
  }},
})