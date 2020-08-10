// pages/compents/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean,
      //value:true
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    onUrl: 'image/like.png',
    offUrl: 'image/likedis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change(event) {

      let like = this.properties.like
      let count = this.properties.count
      console.log(like)
      count=like?count-1:count+1,
      this.setData({
        //后台传过来的是0，like值为false，代表当前状态是不喜欢，由不喜欢，点击一下，调用这个函数，变成喜欢，不喜欢的话count就加上1
        // 只有喜欢的count，没有不喜欢的 count。
        // 喜欢count+1，如果已经喜欢了又不喜欢，那么count-1
        count:count,
        like:!like
      })
      //自定义事件
      //通知页面用户点击了心
      //附加点击状态
      let behavior = this.properties.like?'like':'cancel'
      //激活事件
      this.triggerEvent('like',{
          behavior:behavior
      },{})
    }
  }
})
