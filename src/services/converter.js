import request from '../utils/request'

export function getConverter(valueInput) {
    return request().then(res=>{
        return valueInput*res.currency.PEN
    })
}