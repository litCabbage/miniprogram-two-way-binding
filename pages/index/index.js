//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    name: '',
    telNumber: ''
  },
  // input-with-label组件会trigger这个方法
  componentInput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  myInput(e) {
    this.setData({
      telNumber: e.detail.value
    })
  },
  onLoad: function() {},
})