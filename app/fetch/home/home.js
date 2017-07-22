import { get } from '../get'

 
export function getUserData() {
    const result = get('/api/users')
    return result
}
export function delUserData(id) {
    const result = get('/api/del?_id='+id)
    return result
}


 