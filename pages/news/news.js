const DB = wx.cloud.database().collection('news')

Page({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options.id)
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

    let article = this.data.article;
    wx.setStorageSync(article.id, article)
    this.setData({
      isAdd: true
    })
  },

  //取消收藏
  cancelFavorita: function () {
    let article = this.data.article;
    wx.removeStorageSync(article.id)
    this.setData({
      isAdd: false
    })
  },
})