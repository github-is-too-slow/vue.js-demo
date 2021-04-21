import {
    INCREMENT,
    DECREMENT,
    ADDSTU,
    ADDONE,
    ADDATTR,
    DELETEATTR,
    UPDATENAME
} from './mutations-types'

export default {
    updateName(context, name){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('UPDATENAME', name)
                resolve(name)
            }, 2000);
        })
    }
}