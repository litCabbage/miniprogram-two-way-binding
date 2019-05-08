// components/input-with-label/input-with-label.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeWord: {
      type: String,
      value: '请输入'
    },
    val: {
      type: String, // 必填项
      optionalTypes: [Number],
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    inp(e) {
      this.triggerEvent('changeVal', e.detail)
    }
  }
})
