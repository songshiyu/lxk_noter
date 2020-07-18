import {config} from '../config'
const tips = {
    1:'发现错误',
    1005:'不正确的开发者key',
    3000:'该期内容不存在'
}
class HTTP  {
    request(params){
            console.log(params)
            if (!params.method) {
                params.method='get'
            }
            wx.request({
                url:config.url+params.url,
                header:{
                    'content-type':'appliction/json',
                    'AppKey':config.AppKey
                },
                method:params.method,
                data:params.data,
                success:(res)=>{
                    // console.log(typeof(res.statusCode))
                    console.log(res.data)
                    if (res.statusCode.toString().startsWith('2')) {
                            params.success(res.data)
                    } else {
                        this._show_err(res.data.error_code)
                    }
                },
                fail:(err)=>{
                    this._show_err(1)
                }

            })
    }
    _show_err(error_code){
        if (!error_code) {
            error_code=1
        }
        wx.showToast({
            title: tips[error_code],//对象取属性的方法有两种1.tips.name；2.tips[name]
            icon: 'none',
            image: '',
            duration: 1500,
            mask: false,
        });
    }

}

export{HTTP}