// pages/learn/learn.js
const row=7;
var page=0;
const DB=wx.cloud.database().collection('news')
Page({
  goToDetail:function(e){
    //获取data-id
    let id=e.currentTarget.dataset.id
    //根据id 进行页面跳转
    wx.navigateTo({
      url: '../../pages/news/news?id='+id,
    })
  },
  /**
   * 页面的初始数据
   */
  data:{
    inputShowed: false,
        inputVal: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    DB.limit(row).get({
      success:res=>{
        this.setData({
          newsList:res.data
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
    //翻下一页
    page++
    //获取当前页面新闻纪录
    DB.skip(row*page).limit(row).get({
      success:res=>{
        //获取原有的新闻纪录
        let old_data=this.data.newsList
        let new_data=res.data
        //更新新闻列表
        this.setData({
          newsList:old_data.concat(new_data)
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})