// pages/compents/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean,
      value:true
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    onUrl: 'image/likedis.png',
    offUrl: 'image/like.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change(event) {
      let like = this.properties.like
      let count = this.properties.count
      this.setData({
        count:like?count+1:count-1,
        like:!like
      })
    }
  }
})
