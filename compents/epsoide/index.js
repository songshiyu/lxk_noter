// compents/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:String,
      //observer 这个函数的意义在于，当我们改变了属性的值得时候，微信小程序回来主动地调用observer这个函数
      observer:function (newVal,oldVal,changedPath) {
        console.log(newVal)
        console.log(oldVal)
        console.log(changedPath)
        let val = newVal<10?'0'+newVal:newVal
        this.setData({
          _index:val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _index:'',
    year:0,
    month:'',
    months:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
  },
attached:function () {
  // console.log(this.properties)
  // console.log(this.data)
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()

this.setData({
  year:year,
  month:this.data.months[month]
})

},
  

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
