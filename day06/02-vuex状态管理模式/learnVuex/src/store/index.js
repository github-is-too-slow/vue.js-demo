import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import ModuleA from './modules/ModuleA'

Vue.use(Vuex)

const state = {
    counter: 0,
    stus: [
        {id: 1001, name: "jack", age: 18},
        {id: 1002, name: "Rose", age: 20},
        {id: 1003, name: "jane", age: 22},
        {id: 1004, name: "smith", age: 24}
    ],
    info: {id: 1000, name: "Daniel", age: 19}
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        a: ModuleA
    }
})