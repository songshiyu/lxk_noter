import {HTTP} from '../util/http'

class FirstModel extends HTTP {
    getLatest(sCallback){
        this.request({
            url:'classic/latest',
            success: (res)=> {
                sCallback(res)
            }
        })
    }
}

export{FirstModel}