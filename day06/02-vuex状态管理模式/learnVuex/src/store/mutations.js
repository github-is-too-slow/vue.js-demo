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
    ['INCREMENT'](state){
        state.counter++
    },
    ['DECREMENT'](state){
        state.counter--
    },
    ['ADDSTU'](state, stu){
        state.stus.push(stu)
    },
    ['ADDONE'](state, payload){
        state.stus.push(payload.stu)
    },
    ['ADDATTR'](state){
        // state.info.address = "珞珈山"
        Vue.set(state.info, 'address', '珞珈山')
    },
    ['DELETEATTR'](state){
        // delete state.info.address
        Vue.delete(state.info, 'address')
    },
    ['UPDATENAME'](state, name){
        state.info.name = name
    }
}