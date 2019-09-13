// pages/mytest/test.js

const app = getApp();
const name = app.globalData.name;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"zhangsna李剑",
    person:[
      {id:1,name:"张三1"},
      {id:2,name:"张三2"},
      { id: 3, name: "张三3" },
      { id: 4, name: "张三4" },
    
    ],
    count:0,
    mylist:[]

  },
  add(){
    console.log("dddddddddddddddddddd");
    this.setData({
      count:this.data.count+1
    })
  },
  getUserInfo(event){
    console.log("9999999999");
    console.log(event);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'http://www.baidu.com',
    //   success:(res)=>{
    //     console.log(res);
    //   }
    // });
    this.setData({
      mylist:["a","b","c"]
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
    console.log(name);
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
  onReachBottom(){
    console.log("到底了");
  }
})