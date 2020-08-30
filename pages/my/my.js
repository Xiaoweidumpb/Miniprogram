// pages/my/my.js
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
  data: { 
    number:0,
    loginName:"未登录",
    login_src:"/icon/my_s.png",
    favoriteList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.getMyFavories();
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
  //获取个人信息
  getMyInfo:function name(params) {
    //console.log(params.detail.userInfo)
    let info=params.detail.userInfo
    this.setData({
      login_src:info.avatarUrl,
      loginName:info.nickName,
      isLogin:true,
    })
    this.getMyFavories()
  },
  //更新number收藏数
  getMyFavories:function(){
    let info =wx.getStorageInfoSync();
    let keys=info.keys;
    let num=keys.length;
    let mylist=[];
    for(var i=0;i<num;i++){
      let obj=wx.getStorageSync(keys[i])
      mylist.push(obj)
    }
    //更新数据
    this.setData({
      favoriteList:mylist,
      number:num
    })
  }
})